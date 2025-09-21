declare module 'sortablejs' {
  export interface SortableEvent {
    item: HTMLElement;
    to: HTMLElement;
    from: HTMLElement;
    oldIndex?: number;
    newIndex?: number;
  }

  export interface SortableOptions {
    animation?: number;
    draggable?: string;
    handle?: string;
    filter?: string;
    preventOnFilter?: boolean;
    ghostClass?: string;
    onEnd?: (evt: SortableEvent) => void;
  }

  export default class Sortable {
    constructor(element: HTMLElement, options?: SortableOptions);
    destroy(): void;
  }
}
