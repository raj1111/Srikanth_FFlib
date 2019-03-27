@IsTest
public class STIAPIServiceTest {
    
    @IsTest
    static void testService(){
        Test.startTest();
        STIAPIService.makeRequest('att');
        Test.stopTest();
    }

}
