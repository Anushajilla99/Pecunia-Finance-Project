import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Transaction } from './transaction';
@Injectable({
   providedIn:'root'
})
export class TransactionService
{
   public constructor(private httpClient:HttpClient){ }
   
   public getTransaction(transId:number)  : Observable<Transaction>     //Observable<Book>
   {
      return this.httpClient.get<any>('http://localhost:8585/getTransaction/'+transId);
   }

   public getAllTransactions() : Observable<Transaction[]>
   {
      return this.httpClient.get<Transaction[]>('http://localhost:8585/getAllTransactions');
   }

   public insertTransaction(transaction:Transaction) : any
   {
       return this.httpClient.post<any>('http://localhost:8585/addTransaction',transaction);
   }
   
   public deleteTransaction(transId:number) : any
   {
       return this.httpClient.delete<any>('http://localhost:8093/deleteTransaction/'+transId);
   }

} 