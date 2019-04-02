public with sharing class OpportunitiesSelector extends ApplicationSObjectSelector
                    implements IOpportunitiesSelector
{
    public static IOpportunitiesSelector newInstance()
    {
        return (IOpportunitiesSelector) Application.Selector.newInstance( Opportunity.SObjectType );
    }

    public Schema.sObjectType getSObjectType()
    {
        return Opportunity.SObjectType;
    }

    public override List<Schema.SObjectField> getSObjectFieldList()
    {
        return new List<Schema.SObjectField> {
            Opportunity.Id,
            Opportunity.Name
        };
    }

    private List<Schema.SObjectField> getAdditionalSObjectFieldList()
    {
        return new List<Schema.SObjectField> { };
    }

    public List<Opportunity> selectById(Set<Id> idSet)
    {
        return (List<Opportunity>) selectSObjectsById( idSet == null ? new Set<Id>() : idSet );
    }

    public List<Opportunity> selectByName( Set<String> nameSet )
    {
        fflib_QueryFactory qf = newQueryFactory();
        
        for (FieldSet fs : sObjectFieldSetList)
        {
            qf.selectFieldSet(fs);
        }

        qf.setCondition( Opportunity.Name + ' in :nameSet');
        return Database.query(qf.toSOQL());
    }
}