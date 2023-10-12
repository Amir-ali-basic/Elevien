export class VisibilityController {
  private visibility: boolean;

  constructor() {
    this.visibility = false;
  }

  // Getter
  isVisible() {
    return this.visibility;
  }

  // Actions
  show() {
    this.visibility = true;
  }

  hide() {
    this.visibility = false;
  }
}
