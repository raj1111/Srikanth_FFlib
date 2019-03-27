public class Rc1APIService implements IAPIService{
    
     public ResponseWrapper processResponse(CampaignContext argCampaignContext){
         System.debug('This is RC1 processor');
         //Do whatever processing we want based on the API
         ResponseWrapper responseWrapper = new ResponseWrapper();
         responseWrapper.name = 'RC1 API';
         responseWrapper.amount = 20;
         return responseWrapper;
     }

}
