import { LightningElement, api } from "lwc";


export default class Modalbuilder extends LightningElement {

  // CREATE JSON FOR ACCEPTED MODAL

  json = { 
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
    console.log('currentField - ' + this.json.selectedDisposition)

  }
  

}