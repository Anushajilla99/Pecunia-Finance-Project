import { Component , OnInit} from '@angular/core';
import { TransactionService } from './transaction-service';
import { Transaction } from './transaction';
@Component({
   selector: 'book-list',  
   templateUrl: './transaction-list.component.html'
})
export class TransactionListComponent implements OnInit
{
    transactions:Transaction[];
    public constructor(private transactionService:TransactionService){}
    public getAllTransactions():void
    {
       this.transactionService.getAllTransactions().subscribe(data => this.transactions=data);
    }
    ngOnInit(){}
}

