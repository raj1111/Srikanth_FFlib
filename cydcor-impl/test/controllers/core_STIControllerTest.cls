@IsTest(Isparallel=true)
public class core_STIControllerTest {
    
    @IsTest
    static void testController(){
        ResponseWrapper jsonResponse = core_STIController.getSTIResponse('Salesforce');
        System.debug('Response we got is : ' + jsonResponse);
        System.assert(jsonResponse.name.contains('Salesforce'));
    }

}
