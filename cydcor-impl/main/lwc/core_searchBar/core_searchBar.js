import { LightningElement } from 'lwc';

export default class Core_searchBar extends LightningElement {

    handleChange(event){
        // Debouncing this method: do not update the reactive property as
		// long as this function is being called within a delay of 300 ms.
		// This is to avoid a very large number of Apex method calls.
		window.clearTimeout(this.delayTimeout);
        const searchTerm = event.target.value;
        // eslint-disable-next-line @lwc/lwc/no-async-operation 
        this.delayTimeout = setTimeout(() => {
            this.dispatchEvent(new CustomEvent('search', { detail: searchTerm }));
        }, 300);     

    }
}