public with sharing class STIAPIService {
    
    private static IAPIService service(){
        return (IAPIService) Application.Service.newInstance(IAPIService.class);
    }

    public static ResponseWrapper makeRequest(String argName){
        CampaignContext campaignContext = new CampaignContext();
        CampaignContext.name = argName;
        ResponseWrapper responseWrapper = service().processResponse(campaignContext);
        System.debug('Processed with : ' + responseWrapper.name);
        System.debug('Amount we got is : ' + responseWrapper.amount);
        return responseWrapper;
    }

}
