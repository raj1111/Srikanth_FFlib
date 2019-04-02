public with sharing class OpportunityController {
    
    @AuraEnabled
    public static String createOpportunity(String firstName, Date closeDate, String stage){
        String response = 'Exception';
        try {
            response = JSON.serialize(OpportunitiesService.createOpportunity(firstName, closeDate, stage));            
        } catch (Exception e) {
            System.debug('Exception occured');
            throw new AuraHandledException('Darn it! Something went wrong: ' + e.getMessage());   
        }
        return response;
    }
    
}
