export type MenuItem = {
    label: string;
    icon?: string;
    // Receives the click. The menu closes afterwards unless the action calls
    // event.stopPropagation().
    action?: (event: MouseEvent) => void;
}
