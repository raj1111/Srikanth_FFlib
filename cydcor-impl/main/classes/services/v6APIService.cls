public class V6APIService implements IAPIService{
    
     public ResponseWrapper processResponse(CampaignContext argCampaignContext){
         System.debug('This is V6 processor');
         //Do whatever processing we want based on the API
         ResponseWrapper responseWrapper = new ResponseWrapper();
         responseWrapper.name = 'Hi ' + argCampaignContext.name + ', this is V6 API implementation';
         responseWrapper.amount = 10;
         return responseWrapper;
     }

}