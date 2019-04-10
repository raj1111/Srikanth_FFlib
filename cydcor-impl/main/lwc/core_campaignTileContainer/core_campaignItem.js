import {LightningElement, api} from 'lwc';

export default class Core_CampaignItem extends LightningElement{

    constructor(id, name, label, imgSrc){
        super();
        this.id = id;
        this.name = name;
        this.label = label;
        this.imgSrc = imgSrc;
    }

}