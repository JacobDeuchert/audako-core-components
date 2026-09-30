import React, { useEffect, useState, type FormEvent } from 'react';
import { addons, types, useChannel } from 'storybook/manager-api';
import { Button, Form, PopoverProvider } from 'storybook/internal/components';
import { styled } from 'storybook/theming';
import { CONNECT_EVENTS, TOOL_ID, type ConnectState } from './connect';

// Toolbar tool showing which audako system the stories talk to, with switching
// system, log in and log out. Lives in the manager so it never covers a story;
// the preview does the actual work (see connect.ts).

const Dot = styled.span<{ color: string }>(({ color }) => ({
  width: 8,
  height: 8,
  borderRadius: '50%',
  background: color,
  flexShrink: 0,
}));

const Card = styled.div({
  width: 320,
  padding: 10,
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
});

const Row = styled.form({ display: 'flex', gap: 6 });

const Message = styled.p<{ error?: boolean }>(({ theme, error }) => ({
  margin: 0,
  fontSize: theme.typography.size.s1,
  color: error ? theme.color.negative : theme.textMutedColor,
  overflowWrap: 'anywhere',
}));

function ConnectPanel({ state, emit }: { state: ConnectState; emit: (event: string, payload?: unknown) => void }) {
  const [url, setUrl] = useState(state.system ?? '');

  function submit(event: FormEvent): void {
    event.preventDefault();
    if (url.trim()) emit(CONNECT_EVENTS.SELECT, url);
  }

  return (
    <Card>
      <Row onSubmit={submit}>
        <Form.Input
          value={url}
          onChange={(event) => setUrl(event.currentTarget.value)}
          list="audako-recent-systems"
          placeholder="https://system.audako.net"
          spellCheck={false}
        />
        <datalist id="audako-recent-systems">
          {state.recent.map((item) => (
            <option key={item} value={item} />
          ))}
        </datalist>
        <Button type="submit" variant="solid" ariaLabel={false}>
          Connect
        </Button>
      </Row>

      {state.status === 'error' && <Message error>{state.message}</Message>}
      {state.status === 'none' && <Message>Enter the URL of the system to test against.</Message>}

      {state.system && (state.status === 'ready' || state.status === 'error') && (
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          {state.status === 'ready' && state.loggedIn ? (
            <Button ariaLabel={false} onClick={() => emit(CONNECT_EVENTS.LOGOUT)}>
              Log out
            </Button>
          ) : (
            <Button ariaLabel={false} onClick={() => emit(CONNECT_EVENTS.LOGIN)}>
              Log in
            </Button>
          )}
        </div>
      )}
    </Card>
  );
}

function ConnectTool() {
  const [state, setState] = useState<ConnectState>({ status: 'loading', recent: [] });
  const emit = useChannel({ [CONNECT_EVENTS.STATE]: (next: ConnectState) => setState(next) });

  useEffect(() => emit(CONNECT_EVENTS.REQUEST_STATE), []);

  const online = state.status === 'ready' && state.loggedIn;
  const color = online ? 'rgb(46, 125, 50)' : state.status === 'error' ? '#d43900' : '#999';
  const label = state.system ? new URL(state.system).host : 'No system';

  return (
    <PopoverProvider ariaLabel="audako system" placement="bottom-end" popover={<ConnectPanel state={state} emit={emit} />}>
      <Button variant="ghost" padding="small" tooltip="audako system used by the stories" ariaLabel={false}>
        <Dot color={color} />
        {label}
      </Button>
    </PopoverProvider>
  );
}

addons.register(TOOL_ID, () => {
  addons.add(TOOL_ID, {
    type: types.TOOL,
    title: 'audako system',
    render: () => <ConnectTool />,
  });
});
