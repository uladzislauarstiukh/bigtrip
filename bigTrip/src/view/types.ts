type GetTemplate = never | string;

export interface ViewComponent {
  _element: Element | null;
  getTemplate: () => GetTemplate;
  getElement: () => Element | null;
  removeElement: () => void;
}