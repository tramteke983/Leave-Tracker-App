import { LightningElement , wire, track} from 'lwc';
import getMyLeaves from '@salesforce/apex/LeaveRequstController.getMyLeaves';

export default class MyLeavesChild extends LightningElement {
    columnTable = [{label :'Request Id' ,fieldName :'Name'},
                   {label:'User Name',fieldName:'User__r.Name'},
                   {label :'From Date' ,fieldName : 'From_Date__c'},
                   {label :'To Date' ,fieldName :'To_Date__c'},
                   {label :'Reason' ,fieldName :'Reason__c'},
                   {label :'Status' ,fieldName :'Status__c'},
                   {label :'Manager Comment' ,fieldName :'Manager_Comment__c'},
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

@track myLeavesData = [];
    errorMeassage;       
    
    @wire(getMyLeaves)
    wired({data,error}){
        if(data){
          this.myLeavesData=data;
           console.log('this.myLeaves: '+ JSON.stringify(this.myLeavesData));
        }
        if(error){
           this.errorMeassage=error;
           console.log(errorMeassage);
        }
      }

      get noRecordFound(){
         let result;
         if(this.myLeavesData.length===0){
          return result = true;
         }
         else{
            return result = false;
         }
      }

      
}