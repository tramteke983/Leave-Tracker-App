public with sharing class LeaveRequstController {
    @AuraEnabled(cacheable=true)
    public static List<LeaveRequest__c> getMyLeaves(){
        List<LeaveRequest__c> myLeaves=new List<LeaveRequest__c>();
        myLeaves=[SELECT Id,Name,From_Date__c,To_Date__c,Reason__c,Status__c,Manager_Comment__c,User__r.Name  
        FROM LeaveRequest__c 
        WHERE User__c=:UserInfo.getUserId() ORDER BY CreatedDate DESC];
            
        return myLeaves;
    }
   
    @AuraEnabled(cacheable=true)
    public static List<LeaveRequest__c> getLeaveRequests(){
        List<LeaveRequest__c> myLeaves=new List<LeaveRequest__c>();
        myLeaves=[SELECT Id,Name,From_Date__c,To_Date__c,Reason__c,Status__c,Manager_Comment__c,User__r.ManagerId,User__r.Name 
        FROM LeaveRequest__c
        WHERE User__r.ManagerId=:UserInfo.getUserId() ORDER BY CreatedDate DESC];
            
        return myLeaves;
     }
}