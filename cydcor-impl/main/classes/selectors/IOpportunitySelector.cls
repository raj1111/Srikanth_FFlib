public interface IOpportunitySelector 
                extends IApplicationSObjectSelector
{
    List<Opportunity> selectById( Set<Id> idSet );
    List<Opportunity> selectByName( Set<String> nameSet );

}
