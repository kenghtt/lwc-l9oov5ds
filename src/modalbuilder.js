import { LightningElement, api } from "lwc";


export default class Modalbuilder extends LightningElement {

  // CREATE JSON FOR ACCEPTED MODAL

  jsonBody = { 
    "flow":"ADB",
    "selectedDisposition":"Accepted",

    "fields":[
      {
        "elementType": "dropdown",
        "elementTitle": "Outcome",
        "elementValue": null,
        "elementArrayValues": ['Accepted', 'Declined'],
      }, 
      {
        "elementType": "text",
        "elementTitle": "Outcome",
        "elementValue": 'Hello Name Field',
        "elementArrayValues": null,
      }
    ]
  };




   @api generateJson(){


      console.warn('Inside Generate JSON 123');
      // Call Child Component Function
      const modal = this.template.querySelector("c-modal");
      modal.show();
      modal.generateModal(this.jsonBody);






    // generateModalElements(this.jsonBody);


  //   let json = this.jsonBody;

  //   console.log('currentField - ' + json.selectedDisposition)
  //   console.log('fieldTitle - ' + json.fields[0].elementTitle)
    
  //   for(let i = 0; i < json.fields.length; i++){
  //     let field = json.fields[i];
  //     console.log(field.elementType);


  //     if(field.elementType == 'dropdown'){
  //       this.createDropdownElement(field);

  //     } else if(field.elementType == 'text'){
  //       this.createTextFieldElement(field);

  //     }
  //   }


  }


  createDropdownElement(field){
    console.log('Creating Dropdown Element')
  }

  createTextFieldElement(field){
    console.log('Creating Dropdown Element')
  }
  

}