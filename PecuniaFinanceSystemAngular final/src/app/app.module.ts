import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';
import {HttpClient,HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { ListAccountComponent } from './list-account/list-account.component';
import { UpdateAccountComponent } from './update-account/update-account.component';
import { DebitslipComponent } from './debitslip/debitslip.component';
import { CreditchequeComponent } from './creditcheque/creditcheque.component';
import { DebitchequeComponent } from './debitcheque/debitcheque.component';
import { TransactionModule } from './Transaction/transaction-module';
import { LoanrequestComponent } from './loanrequest/loanrequest.component';
import { LoanacceptedComponent } from './loanaccepted/loanaccepted.component';
import { LoanapprovedComponent } from './loanapproved/loanapproved.component';
import { LoanrejectedComponent } from './loanrejected/loanrejected.component';
import { UpdatePassbookComponent } from './update-passbook/update-passbook.component';
import { AccountSummaryComponent } from './account-summary/account-summary.component';
import { ResponseComponent } from './response/response.component';
import { CheckBalanceComponent } from './check-balance/check-balance.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    SignupComponent,
    HomeComponent,
    AddUserComponent,
    AddAccountComponent,
    ListAccountComponent,
    UpdateAccountComponent,
    DebitslipComponent,
    CreditchequeComponent,
    DebitchequeComponent,
    LoanrequestComponent,
    LoanacceptedComponent,
    LoanapprovedComponent,
    LoanrejectedComponent,
    UpdatePassbookComponent,
    AccountSummaryComponent,
    ResponseComponent,
    CheckBalanceComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TransactionModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
