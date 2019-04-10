import { LightningElement,api } from 'lwc';

export default class Core_campaignTileItem extends LightningElement {

    @api campaignItem;

    openModalBox(){
        const popUpModalComponent = this.template.querySelector('c-core_popup');
        if(popUpModalComponent){
            popUpModalComponent.openmodal();
        }
    }

}