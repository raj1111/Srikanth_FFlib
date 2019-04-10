import { LightningElement, track } from 'lwc';

export default class Core_searchBar extends LightningElement {

    handleChange(event){
        const searchKey = event.target.value;
        this.dispatchEvent(new CustomEvent('search', { detail: searchKey }));
    }
}