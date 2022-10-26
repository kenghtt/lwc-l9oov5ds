import { LightningElement } from "lwc";

export default class App extends LightningElement {
  handleShowModal() {
    const modal = this.template.querySelector("c-modal");
    modal.show();
  }
}