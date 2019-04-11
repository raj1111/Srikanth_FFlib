import { LightningElement } from 'lwc';

export default class Core_campaignListingContainer extends LightningElement {
    
    collectData(){
        console.log('Collecting Data');
        let childComponents = this.template.querySelectorAll(".childComponent");
        console.log('Child Components we got is : ' + childComponents);
        if(childComponents){
           childComponents.forEach(child => {
                console.log('Child component is : ' + Object.values(child.getComponentBody()));
            });
        }
    }

}