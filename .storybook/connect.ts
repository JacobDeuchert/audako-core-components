// Channel contract between the connect tool in the Storybook toolbar
// (manager.tsx) and the preview (preview.ts), which owns the system selection
// and the login. The tool only renders this state and sends the user's picks.

export const TOOL_ID = 'audako/connect';

export const CONNECT_EVENTS = {
  /** preview → manager, payload ConnectState */
  STATE: 'audako/connect/state',
  /** manager → preview, asks for STATE (the tool may mount after the preview). */
  REQUEST_STATE: 'audako/connect/request-state',
  /** manager → preview, payload: system URL as typed */
  SELECT: 'audako/connect/select',
  LOGIN: 'audako/connect/login',
  LOGOUT: 'audako/connect/logout',
} as const;

export type ConnectStatus =
  | { status: 'none' }
  | { status: 'loading' }
  | { status: 'error'; message: string }
  | { status: 'ready'; loggedIn: boolean };

export type ConnectState = ConnectStatus & {
  system?: string;
  recent: string[];
};
