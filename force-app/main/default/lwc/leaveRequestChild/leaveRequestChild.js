import { LightningElement , wire, track} from 'lwc';
import getLeaveRequestRef from '@salesforce/apex/LeaveRequstController.getLeaveRequests';

export default class LeaveRequestChild extends LightningElement {
    columnTable = [
        {label:'Request Id',fieldName:'Name'},
        {label:'User Name',fieldName:'User__r.Name'},
        {label:'From Date',fieldName:'From_Date__c'},
        {label:'To Date',fieldName:'To_Date__c'},
        {label:'Reason',fieldName:'Reason__c'},
        {label:'Status',fieldName:'Status__c'},
        {label:'Manager Comment',fieldName:'Manager_Comment__c'},
        {
          type: "button", label: 'Edit', initialWidth: 100, 
          typeAttributes: {
              label: 'Edit',
              name: 'Edit',
              title: 'Edit',
              value: 'edit',
              
          }
      }

    ];
   
     @track leaveRequestData = [];
     errorMessage;
    
    @wire(getLeaveRequestRef)
    wired({data, error}){
    if(data){
      this.leaveRequestData = data;
    }
    if(error){
      this.errorMessage = error;
    }
   }

   get noDataOfLeaveReq(){
    let result;
    if(this.leaveRequestData.length===0){
        result = true;
    }
    else{
        result = false;
    }
    return result;
   }
}