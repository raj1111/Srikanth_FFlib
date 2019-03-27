public class OpportunitiesSelector 
             extends ApplicationSObjectSelector
             implements IOpportunitySelector{

    public override List<Schema.SObjectField> getSObjectFieldList()
    {
        return new List<Schema.SObjectField> {
            Opportunity.Name,
            Opportunity.Id
        };
    }

    private List<Schema.SObjectField> getAdditionalSObjectFieldList()
    {
        return new List<Schema.SObjectField> { };
    }
		
    public Schema.SObjectType getSObjectType()
    {
        return Opportunity.sObjectType;
    }

    public List<Opportunity> selectById( Set<Id> idSet ){
        return this.selectSObjectsById(idSet);
    }


    public List<Opportunity> selectByName(Set<String> argNames) {
        return (List<Opportunity>) 
            Database.query(
            newQueryFactory().
                setCondition('Name in :argNames').
                toSOQL());
    }
}
