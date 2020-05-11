import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ListAccountComponent } from './list-account/list-account.component';
import { UpdateAccountComponent } from './update-account/update-account.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { TransactionListComponent } from './Transaction/transactionlist-component';
import { DebitslipComponent } from './debitslip/debitslip.component';
import { CreditchequeComponent } from './creditcheque/creditcheque.component';
import { DebitchequeComponent } from './debitcheque/debitcheque.component';
import {CheckBalanceComponent}from './check-balance/check-balance.component';
import { TransactionComponent } from './Transaction/transaction-component';
import { LoanrequestComponent } from './loanrequest/loanrequest.component';
import { LoanacceptedComponent } from './loanaccepted/loanaccepted.component';
import { LoanapprovedComponent } from './loanapproved/loanapproved.component';
import { LoanrejectedComponent } from './loanrejected/loanrejected.component';
import { UpdatePassbookComponent } from './update-passbook/update-passbook.component';
import { AccountSummaryComponent } from './account-summary/account-summary.component';
import { ResponseComponent } from './response/response.component';


const routes: Routes = [
  {path:'app-login',component:LoginComponent},
  {path:'app-signup',component:SignupComponent},
  {path:'app-logout',component:LogoutComponent},
  {path:'app-home',component:HomeComponent},
  {path:'app-add-user',component:AddUserComponent},
  {path:'listacc',component:ListAccountComponent},
  {path:'addacc',component:AddAccountComponent},
  {path:'updateacc',component:UpdateAccountComponent},
  {path:'',component:TransactionListComponent},
  {path:'add',component:TransactionComponent},
  {path:'del',component:DebitslipComponent},
  {path:'addc',component:CreditchequeComponent},
  {path:'delc',component:DebitchequeComponent},
  {path:'checkb',component:CheckBalanceComponent},
  {path:'list',component:TransactionListComponent},
  {path: 'loanreq',component: LoanrequestComponent},
  {path:'allloans',component:LoanacceptedComponent},
  {path: 'acceptloans',component: LoanapprovedComponent},
  {path: 'rejectloans',component: LoanrejectedComponent},
  {path:'updatePassbook',component:UpdatePassbookComponent},
  {path:'accountSummary',component:AccountSummaryComponent},
  {path:'response',component:ResponseComponent}
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
