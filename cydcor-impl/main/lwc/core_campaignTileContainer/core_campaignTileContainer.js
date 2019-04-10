import { LightningElement, track } from 'lwc';
import Core_CampaignItem from './core_campaignItem';


export default class Core_campaignTileContainer extends LightningElement {

    // @track campaignItemList = this.createCampaignList();

    index = 0;

    get incrementAndGet(){
        this.index = (this.index + 1 ) % 4;
        if(this.index === 0){
            this.index = 1;
        }
        return this.index;
    }
    
    actualCampaignItemList = [
        {
            id: 1,
            name: 'camp1',
            label: 'AT & T',
            imgSrc: `/apexpages/slds/latest/assets/images/avatar${this.incrementAndGet}.jpg`
        },
        {
            id: 2,
            name: 'AT & T Res',
            label: 'AT & T Res',
            imgSrc: `/apexpages/slds/latest/assets/images/avatar${this.incrementAndGet}.jpg`
        },
        {
            id: 3,
            name: 'Quill',
            label: 'Quill',
            imgSrc: `/apexpages/slds/latest/assets/images/avatar${this.incrementAndGet}.jpg`
        },
        {
            id: 4,
            name: 'T-Mobile',
            label: 'T-Mobile',
            imgSrc: `/apexpages/slds/latest/assets/images/avatar${this.incrementAndGet}.jpg`
        },
        {
            id: 5,
            name: 'Century Link',
            label: 'Century Link',
            imgSrc: `/apexpages/slds/latest/assets/images/avatar${this.incrementAndGet}.jpg`
        },
        {
            id: 6,
            name: 'Amazon',
            label: 'Amazon',
            imgSrc: `/apexpages/slds/latest/assets/images/avatar${this.incrementAndGet}.jpg`
        },
        {
            id: 7,
            name: 'camp7',
            label: 'Campaign 7',
            imgSrc: `/apexpages/slds/latest/assets/images/avatar${this.incrementAndGet}.jpg`
        },
        {
            id: 8,
            name: 'camp8',
            label: 'Campaign 8',
            imgSrc: `/apexpages/slds/latest/assets/images/avatar${this.incrementAndGet}.jpg`
        },
        {
            id: 9,
            name: 'camp9',
            label: 'Campaign 9',
            imgSrc: `/apexpages/slds/latest/assets/images/avatar${this.incrementAndGet}.jpg`
        },
        {
            id: 10,
            name: 'camp10',
            label: 'Campaign 10',
            imgSrc: `/apexpages/slds/latest/assets/images/avatar${this.incrementAndGet}.jpg`
        },
        {
            id: 11,
            name: 'camp11',
            label: 'Campaign 11',
            imgSrc: `/apexpages/slds/latest/assets/images/avatar${this.incrementAndGet}.jpg`
        },
        {
            id: 12,
            name: 'camp12',
            label: 'Campaign 12',
            imgSrc: `/apexpages/slds/latest/assets/images/avatar${this.incrementAndGet}.jpg`
        }

    ];

    @track campaignItemList = this.actualCampaignItemList;

    //createCampaign list. May be from the Controller.
    //Currently I am hard coding for testing.
    //TODO get the enabled campaign list from the controller.
    createCampaignList(){
        const cItemList = [];
        
        const camp1 = new Core_CampaignItem('camp1', 'Campaign 1', 'Campaign Number 1', '/docs/component-library/app/images/examples/avatar1.jpg');
        const camp2 = new Core_CampaignItem('camp2', 'Campaign 2', 'Campaign Number 2', '/docs/component-library/app/images/examples/avatar2.jpg');
        const camp3 = new Core_CampaignItem('camp3', 'Campaign 3', 'Campaign Number 3', '/docs/component-library/app/images/examples/avatar3.jpg');
        
        cItemList.push(camp1);
        cItemList.push(camp2);
        cItemList.push(camp3);
        
        return cItemList; 
    }


    handleSearch(event){
        let searchValue = event.detail;
        console.log('Search term caught is :' + searchValue);
            
        if(searchValue){
            searchValue = searchValue.toLowerCase();
            this.campaignItemList = this.actualCampaignItemList.filter( cItem  => (cItem.name.toLowerCase().indexOf(searchValue) !== -1 || cItem.label.toLowerCase().indexOf(searchValue) !== -1));
        } else {
            this.campaignItemList = this.actualCampaignItemList;
        }
    }



}