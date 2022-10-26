import { LightningElement } from "lwc";

export default class App extends LightningElement {
  handleShowModal() {
    const modal = this.template.querySelector("c-modal");
    console.log("test123456")
    modal.show();
  }



    value = 'inProgress';

    get options() {
        return [
            { label: 'Accepted', value: 'accepted' },
            { label: 'Declined', value: 'declined' },
            { label: 'Maybe Later', value: 'maybeLater' },
        ];
    }

    handleChange(event) {
        this.value = event.detail.value;

        console.log('value - '+ this.value);


        // Invoke Modal builder to create JSON
        if(this.value == 'accepted'){

          // Show Accepted Modal
              // const modal = this.template.querySelector("c-modal");
              // modal.show();


            // Call Child Component Function
            const modalBuilder = this.template.querySelector("c-modalbuilder");
            modalBuilder.generateJson();


        }

        // TODO Later -- Show Declined Modal
    }
}