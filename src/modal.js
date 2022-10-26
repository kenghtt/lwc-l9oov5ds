import { LightningElement, api } from "lwc";


export default class Modal extends LightningElement {
  showModal = false;



// THIS Generic Modal will then Open Modal and show how it looks based on JSON INFORMATION
  @api show() {
    this.showModal = true;
  }
  handleDialogClose() {
    this.showModal = false;
  }
}