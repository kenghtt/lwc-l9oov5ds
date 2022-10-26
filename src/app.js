import { LightningElement } from "lwc";

export default class App extends LightningElement {
  handleShowModal() {
    const modal = this.template.querySelector("c-modal");
    console.log("test123")
    modal.show();
  }
}