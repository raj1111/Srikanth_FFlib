public with sharing class OpportunitiesService {
    
    private static IOpportunitiesService service()
    {
        return (IOpportunitiesService) Application.Service.newInstance( IOpportunitiesService.class );
    }

    public static Set<Id> createOpportunity( String name, Date closeDate, String stage )
    {
        System.debug('Calling IOpportunitiesService.createOpportunity(String) method');
        Opportunity opp = new Opportunity();
        opp.Name = name;
        opp.StageName = stage;
        opp.CloseDate = closeDate;
        return service().createOpportunity(opp);
    }

}
