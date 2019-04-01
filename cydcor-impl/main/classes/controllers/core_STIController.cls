public with sharing class core_STIController {
    
    @AuraEnabled
    public static ResponseWrapper getSTIResponse(String name){
        return STIAPIService.makeRequest(name);   
    }

}
