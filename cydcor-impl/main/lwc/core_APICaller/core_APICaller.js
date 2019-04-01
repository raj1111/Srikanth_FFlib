import { LightningElement, track } from 'lwc';
import getSTIResponse from '@salesforce/apex/core_STIController.getSTIResponse';

export default class Core_APICaller extends LightningElement {

    @track
    error;
    @track
    response;
    
    nameValue = '';

    handleNameChange(event){
        this.nameValue = event.target.value; 
        this.response = undefined;
    }

    handleAPICall(){
        const name = this.nameValue;
        getSTIResponse({name})
        .then(result => {
            this.response = result;
            this.error = undefined;
        })
        .catch(error => {
            this.error = error;
            this.response = undefined;  
        });
    }

}