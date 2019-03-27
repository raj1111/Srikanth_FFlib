public class v6APIService implements IAPIService{
    
     public ResponseWrapper processResponse(CampaignContext argCampaignContext){
         System.debug('This is V6 processor');
         //Do whatever processing we want based on the API
         ResponseWrapper responseWrapper = new ResponseWrapper();
         responseWrapper.name = 'V6 API';
         responseWrapper.amount = 10;
         return responseWrapper;
     }

}
