public class OpportunityService {
    
    private static IOpportunityService service(){
        return (IOpportunityService) Application.Service.newInstance(IOpportunityService.class);
    }

    public static void createOppWithName(String argName){
        service().createOppWithName(argName);
    }

}
