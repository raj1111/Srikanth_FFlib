public with sharing class Opportunities extends ApplicationSObjectDomain
    implements IOpportunities{

    private static final List<Schema.SObjectType> MY_SOBJECTS = new Schema.SObjectType[] {
                                                              Opportunity.SObjectType
                                                          };
    DmlImpl customDML = new DmlImpl();
     
    ApplicationSObjectUnitOfWork uow = new ApplicationSObjectUnitOfWork(MY_SOBJECTS, customDML);   
    
    public static IOpportunities newInstance(List<Opportunity> records)
    {
        return (IOpportunities) Application.Domain.newInstance(records);
    }

    public static IOpportunities newInstance(Set<Id> recordIds)
    {
        return (IOpportunities) Application.Domain.newInstance(recordIds);
    }

    public Opportunities(){
        
    }

    public Opportunities(List<Opportunity> records)
    {
        super(records);        
    }

    public class Constructor
        implements fflib_SObjectDomain.IConstructable
    {
        public fflib_SObjectDomain construct(List<SObject> sObjectList)
        {
            return new Opportunities(sObjectList);
        }
    }

    public Set<Id> createOpportunities(List<Opportunity> argOpps){
        System.debug('In Opportunities Domain');
        uow.registerNew(argOpps);
        uow.commitWork();
        System.debug('Completed the insertion');
        return this.customDML.recordIdSet;
    }

    public class DmlImpl implements fflib_SObjectUnitOfWork.IDML{
        Set<Id> recordIdSet = new Set<Id>();
                
        public void dmlInsert(List<SObject> objList){
            insert objList;
            createSets(objList);
        }

        public void dmlUpdate(List<SObject> objList){
            update objList;
            createSets(objList);
        }

        public void dmlDelete(List<SObject> objList){
            delete objList;
            createSets(objList);
        }

        private void createSets(List<Sobject> argSobjList){
            for(SObject sobj : argSobjList){
                this.recordIdSet.add(sobj.Id);
            }
        }
    }

}
