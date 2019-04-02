import { LightningElement } from 'lwc';
import createOpportunity from '@salesforce/apex/OpportunityController.createOpportunity';
import {ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class Core_customInfoContainer extends LightningElement {

    firstName = '';
    middleName = '';
    lastName = '';
    primaryPhoneNumber = '';
    secondaryPhoneNumber = '';
    stage = '';
    closeDate = '';

    variant = 'success';
    title = 'Status';
    message = '';


    captureFirstName(event){
        this.firstName = event.target.value;
    }
    captureLasttName(event){
        this.lastName = event.target.value;
    }
    captureMiddleName(event){
        this.middleName = event.target.value;
    }
    capturePrimaryPhone(event){
        this.primaryPhoneNumber = event.target.value;
    }
    captureSecondaryPhone(event){
        this.secondaryPhoneNumber = event.target.value;
    }
    captureCloseDate(event){
        this.closeDate = event.target.value;
    }
    captureStage(event){
        this.stage = event.target.value;
    }

    saveOpportunity(){
        console.log('Saving Opportunity');
        const firstName = this.firstName;
        // const lastName = this.lastName;
        // const middleName = this.middleName;
        // const primaryPhoneNumber = this.primaryPhoneNumber;
        // const secondaryPhoneNumber = this.secondaryPhoneNumber;
        const closeDate = this.closeDate;
        const stage = this.stage;

        createOpportunity({firstName, stage, closeDate})
        .then(result => {
            this.message = result;
            this.showNotification();
        })
        .catch(error => {
            this.message = 'Failed : ' + error;
            this.variant = 'error';
            this.showNotification();
        });
    }

    showNotification(){
        const evt = new ShowToastEvent({
            title: this.title,
            message: this.message,
            variant: this.variant,
        });
        this.dispatchEvent(evt);
    }

}