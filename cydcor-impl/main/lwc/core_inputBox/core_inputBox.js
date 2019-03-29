import { LightningElement, track } from 'lwc';

export default class Core_inputBox extends LightningElement {

    @track firstName = '';
    @track lastName = '';
    @track areDetailsVisible = false;

    handleChange(event){
        const field = event.target.name;
        if(field === 'firstName'){
            this.firstName = event.target.value;
        } else if(field === 'lastName'){
            this.lastName = event.target.value;
        }
    }

    get uppercasedFullName(){
        return `${this.firstName} ${this.lastName}`.toUpperCase();
    }

    handleCheckboxChange(event){
        this.areDetailsVisible = event.target.checked;
    }

}