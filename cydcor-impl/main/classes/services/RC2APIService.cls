public class RC2APIService implements IAPIService{
    
     public ResponseWrapper processResponse(CampaignContext argCampaignContext){
         System.debug('This is RC2 processor');
         //Do whatever processing we want based on the API
         ResponseWrapper responseWrapper = new ResponseWrapper();
         responseWrapper.name = 'RC2 API';
         responseWrapper.amount = 30;
         return responseWrapper;
     }

}