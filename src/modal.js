import { LightningElement, createElement, api } from "lwc";



export default class Modal extends LightningElement {
  showModal = false;



// THIS Generic Modal will then Open Modal and show how it looks based on JSON INFORMATION
  @api show() {
    this.showModal = true;
  }
  handleDialogClose() {
    this.showModal = false;
  }


  @api generateModal(jsonBody){

    
    console.log('JSON BODY ----' + jsonBody.flow)
    console.warn('Inside Generate Modal Element WOOT WOOT WOOT!!!')

  this.createElement(jsonBody);
  }

  createElement(jsonBody){
    const modalContainer = document.getElementById('jeremy');

    // alert(modalContainer)

    let div = document.createElement('div');
    div.innerHTML = 'Here is the Text Dude';
    div.innerText = 'Some Text Example Here!!!'
    
    // this.modalContainer.appendChild(div);


    console.log('Test123');

  }


}