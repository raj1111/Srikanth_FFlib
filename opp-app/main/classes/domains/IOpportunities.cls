public interface IOpportunities extends IApplicationSObjectDomain {
    
    Set<Id> createOpportunities(List<Opportunity> argOpps);

}
