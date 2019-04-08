public virtual class Rc1APIService implements IAPIService{
    
     public ResponseWrapper processResponse(CampaignContext argCampaignContext){
         System.debug('This is RC1 processor');
         //Do whatever processing we want based on the API
         ResponseWrapper responseWrapper = new ResponseWrapper();
         responseWrapper.name = 'Hi ' + argCampaignContext.name + ', this is ' + getNameValue() + ' implementation for processing JSON response...';
         responseWrapper.amount = getAmountValue();
         return responseWrapper;
     }

     public virtual Integer getAmountValue(){
         return 20;
     }

     public virtual String getNameValue(){
         return 'RC1 API';
     }

}
