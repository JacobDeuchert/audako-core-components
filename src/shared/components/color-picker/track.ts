import type { Action } from 'svelte/action';

/** Pointer position inside the tracked element, both axes as a fraction of its box (0–1). */
export interface TrackPosition {
  x: number;
  y: number;
}

function clamp(value: number): number {
  return Math.min(1, Math.max(0, value));
}

/**
 * Makes the node a drag surface for the mixer's two fields: a press and every drag that follows is
 * reported as a normalized position inside its box.
 *
 * The pointer is captured on press, so a drag that leaves the element keeps running and saturates
 * at the edge instead of freezing where the pointer left. Pointer events also cover touch and pen;
 * `touch-action: none` (set by the hosts' styles) keeps the drag from scrolling the popup instead.
 */
export const track: Action<HTMLElement, (position: TrackPosition) => void> = (node, onmove) => {
  let pointerId: number | null = null;

  const emit = (event: PointerEvent) => {
    const rect = node.getBoundingClientRect();
    onmove({
      x: clamp((event.clientX - rect.left) / rect.width),
      y: clamp((event.clientY - rect.top) / rect.height),
    });
  };

  const down = (event: PointerEvent) => {
    // Keeps the press from starting a text selection.
    event.preventDefault();
    pointerId = event.pointerId;
    node.setPointerCapture(event.pointerId);
    emit(event);
  };

  const move = (event: PointerEvent) => {
    if (pointerId === event.pointerId) {
      emit(event);
    }
  };

  const up = (event: PointerEvent) => {
    if (pointerId !== event.pointerId) {
      return;
    }
    node.releasePointerCapture(event.pointerId);
    pointerId = null;
  };

  node.addEventListener('pointerdown', down);
  node.addEventListener('pointermove', move);
  node.addEventListener('pointerup', up);
  node.addEventListener('pointercancel', up);

  return {
    update(next) {
      onmove = next;
    },
    destroy() {
      node.removeEventListener('pointerdown', down);
      node.removeEventListener('pointermove', move);
      node.removeEventListener('pointerup', up);
      node.removeEventListener('pointercancel', up);
    },
  };
};
