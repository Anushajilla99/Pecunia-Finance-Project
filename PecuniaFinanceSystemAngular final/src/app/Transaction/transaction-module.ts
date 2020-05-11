import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { TransactionComponent } from './transaction-component';
import { TransactionService } from './transaction-service';
import { TransactionListComponent } from './transactionlist-component';
@NgModule({
  
   declarations: [
    TransactionComponent,TransactionListComponent ],
 
   imports: [
    HttpClientModule, FormsModule , CommonModule ],
  
   providers: [ TransactionService ],
 
   exports: [ TransactionComponent,TransactionListComponent  ]
})
export class TransactionModule
{}