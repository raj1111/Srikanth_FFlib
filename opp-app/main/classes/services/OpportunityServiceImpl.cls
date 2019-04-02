public with sharing class OpportunityServiceImpl implements IOpportunitiesService{
    
    private static IOpportunities getDomain(List<SObject> argSobjects)
    {
        return (IOpportunities) Application.Domain.newInstance( argSobjects );
    }

    public Set<Id> createOpportunity(Opportunity argOpportunity){
        System.debug('Calling IOpportunitiesService.createOpportunity(String) method');
        List<Opportunity> opps = new List<Opportunity>();
        opps.add(argOpportunity);
        Set<Id> idSet = getDomain(opps).createOpportunities(opps);
        System.debug('In the create Opportunity of OpportunityServiceImpl');    
        return idSet;        
    }

}
