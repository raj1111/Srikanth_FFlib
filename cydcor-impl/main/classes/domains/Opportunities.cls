public class Opportunities extends ApplicationSObjectDomain
                           implements IOpportunities{
    
    public static IOpportunities newInstance(List<Opportunity> records)
    {
        return (IOpportunities) Application.Domain.newInstance(records);
    }

    public static IOpportunities newInstance(Set<Id> recordIds)
    {
        return (IOpportunities) Application.Domain.newInstance(recordIds);
    }

    public Opportunities(List<Opportunity> records)
    {
        super(records);

        // don't enforce CRUD security for Opportunity records
        this.Configuration.disableTriggerCRUDSecurity();
    }

    public class Constructor
        implements fflib_SObjectDomain.IConstructable
    {
        public fflib_SObjectDomain construct(List<SObject> sObjectList)
        {
            return new Opportunities(sObjectList);
        }
    }

    public virtual void process(){
        System.debug('This is default Opportunities class...');
    }
}
