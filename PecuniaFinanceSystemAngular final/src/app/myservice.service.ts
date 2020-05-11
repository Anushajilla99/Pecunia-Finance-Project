import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  trans:Transaction;
  loanrequests:LoanRequests[];
  loandisbursals:LoanDisbursal[];
  loanrejects:LoanDisbursal[];
  updateaccount:Accounts;
  up: customerdata;
  
  constructor(private httpService: HttpClient) { }
  public getUser(){
    console.log("ins service get employees");
    const headers=new HttpHeaders().set('Content_Type','text/plain ;charset=utf-8');
    return this.httpService.get<customerdata>("http://localhost:8888/customer/GetAllCustomers");
  }

  public addUser(addemp: customerdata) {
    
    console.log("ins service add");
    console.log(addemp);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.post("http://localhost:8888/customer/addCustomer", addemp,  { headers, responseType: 'text'});
  }

  delete(id: number) {
    console.log("ins service delete");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.delete("http://localhost:8888/customer/DeleteUser/" + id,  { headers, responseType: 'text'});
  }
  login(u:customerdata){
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.put("http://localhost:8888/customer/Login", u,  { headers, responseType: 'text'});
  }

  logOut() {
    sessionStorage.removeItem('customerName')
  }


//ACCOUNT------------------------------------------------------------------------------------------
  

  public getAllAccounts() {
    console.log("ins service get accounts");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get<Accounts>("http://localhost:8885/account/GetAllAccounts");
  }

  public accountCreation(addacc: Accounts) {
    console.log("ins service add");
    console.log(addacc);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.post("http://localhost:8885/account/AccountCreation", addacc,  { headers, responseType: 'text'});
  }
  
  public update(updateaccount: Accounts) {
    this.updateaccount = updateaccount;
  }
  public updateMethod() {
    return this.updateaccount;
  }
  public onUpdate(updateacct: Accounts) {
    console.log("ins service update");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.put("http://localhost:8885/account/UpdateAccount", updateacct,  { headers, responseType: 'text'});
  }
  deleteByAccountnum(accountNum: number) {
    console.log("ins service delete");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.delete("http://localhost:8885/account/DeleteAccount/" + accountNum,  { headers, responseType: 'text'});
  }


  public getbalance(checkbalance: number) {
    console.log("ins service add");
    console.log(checkbalance);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get("http://localhost:8885/account/checkbalance/" +checkbalance ,{responseType: 'text'});
  }
  
//TRANSACTION---------------------------------------------------------------------------------------


  public creditUsingSlip(creditslip: Transaction) {
    console.log("ins service add");
    console.log(creditslip);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.post("http://localhost:8885/account/creditusingslip", creditslip,  { headers, responseType: 'text'});
  }
  
  public debitUsingSlip(debitslip: Transaction) {
    console.log("ins service add");
    console.log(debitslip);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.post("http://localhost:8885/account/debitusingslip", debitslip,  { headers, responseType: 'text'});
  }
  
  public creditUsingCheque(creditcheque: Transaction) {
    console.log("ins service add");
    console.log(creditcheque);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.post("http://localhost:8885/account/creditusingcheque", creditcheque,  { headers, responseType: 'text'});
  }

  public debitUsingCheque(debitcheque: Transaction) {
    console.log("ins service add");
    console.log(debitcheque);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.post("http://localhost:8885/account/debitusingcheque", debitcheque,  { headers, responseType: 'text'});
  }
  


//LOAN--------------------------------------------------------------------------------------------------


updateBal(updatebal: LoanDisbursal):any {
  console.log(updatebal);
  const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
  return this.httpService.post("http://localhost:8885/account/updateBal", updatebal,  { headers,responseType: 'text'});
}

getAllRequests() {
  return this.loanrequests;
}
getRequestsInitially(): Observable<LoanRequests[]> {
  //this function runs for first time
  return this.httpService.get<LoanRequests[]>("http://localhost:8885/account/getAllRequests");
}
setRequestsInitially(reqlist: LoanRequests[]) {
  //set the requests data for future use
  this.loanrequests = reqlist;
}

getAllApproved() {
  return this.loandisbursals;
}
getApprovesInitially(): Observable<LoanDisbursal[]> {
  //this function runs for first time
  return this.httpService.get<LoanDisbursal[]>("http://localhost:8885/account/approvedrequests");
}
setApprovesInitially(reqlist: LoanDisbursal[]) {
  //set the approves data for future use
  this.loandisbursals = reqlist;
}
getAllRejected() {
  return this.loanrejects;
}
getRejectsInitially(): Observable<LoanDisbursal[]> {
  //this function runs for first time
  return this.httpService.get<LoanDisbursal[]>("http://localhost:8885/account/rejectedrequests");
}
setRejectsInitially(reqlist: LoanDisbursal[]) {
  //set the rejects data for future use
  this.loanrejects = reqlist;
}
loanRequest(user: LoanRequests):any{ 
  const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
  return this.httpService.post("http://localhost:8885/account/request", user,  {headers, responseType: 'text'});
}

//PASSBOOK------------------------------------------------------------

updatePassbook(accountId:String){
  console.log("in angular service");
  return this.httpService.get("http://localhost:8885/account/updatePassbook/"+accountId ,{responseType: 'json'});
}
accountSummary(accountId:String,StartDate:Date,EndDate:Date){
  console.log(accountId,StartDate,EndDate);
  return this.httpService.get("http://localhost:8885/account/accountSummary/"+accountId+"/"+StartDate+"/"+EndDate ,{responseType: 'json'});
}
accountValidation(accountId:String){
  console.log("in angular service");
  return this.httpService.get("http://localhost:8885/account/accountValidation/"+accountId ,{responseType: 'text'})
}
}


export class LoanRequests {  
 public accountId: number;
 public loanAmount : number;
 public loanTenure: number;
 public creditScore: number;
 public loanRoi: number;
 public loanStatus: string;
 public loanType: string;
 public loanId:number;  
}
export class LoanDisbursal {
constructor(   
 public accountId: number,
 public loanAmount : number,
 public loanTenure: number,
 public creditScore: number,
 public loanRoi: number,
 public loanStatus: string,
 public loanType: string,
 public emi: number,
 public loanId:number){}
}


export class Transaction
{
transId:number;
accId:number;
type:string;
amount:number;  
dateOfTrans:Date;
cheque_id:number;
bank_name:string;
ifsc:number;
status:string;
issued_date:Date;
account_id:number;
}


export class Accounts {
  accountNumber: number;
  cust_name: string;
  account_balance: number;
  addressLine1: string;
  addressLine2: string;
  state: string;
  city: string;
  country: string;
  zipCode: number;
  aadhar: number;
  contact: number;
  lastUpdated:Date;
}



 
export class customerdata{
  customerId:number;
  customerName:string;
  customerType:string;
  customerPassword:string;
  customerPhoneno:number;
  customerEmail:string;
}

