import { LightningElement, api } from "lwc";


export default class Modalbuilder extends LightningElement {

  // CREATE JSON FOR ACCEPTED MODAL

  jsonBody = { 
    "flow":"ADB",
    "selectedDisposition":"Accepted",

    "fields":[
      {
        "elementType": "dropdown",
        "isElementValDynamic": true,
        "elementTitle": "Outcome",
        "elementValue": ['Accepted', 'Declined'],
        "elementRequired": true,
        "elementDisabled": false,
        "isConditional" : true,
      }, 
      {
        "elementType": "text",
        "isElementValDynamic": true,
        "elementTitle": "Outcome",
        "elementValue": 'SomeFieldYOO',
        "elementRequired": true,
        "elementDisabled": false,
        "isConditional" : true,
      }
    ]
  };


   @api iterateJson(){
    let json = this.jsonBody;

    console.log('currentField - ' + json.selectedDisposition)
    console.log('fieldTitle - ' + json.fields[0].elementTitle)
    
    for(let i = 0; i < json.fields.length; i++){
      let field = json.fields[i];
      console.log(field.elementType);


      if(field.elementType == 'dropdown'){
        this.createDropdownElement(field);

      } else if(field.elementType == 'text'){
        this.createTextFieldElement(field);

      }
    }
  }


  createDropdownElement(field){
    console.log('Creating Dropdown Element')
  }

  createTextFieldElement(field){
    console.log('Creating Dropdown Element')
  }
  

}