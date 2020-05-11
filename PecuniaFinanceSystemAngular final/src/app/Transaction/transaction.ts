import { Cheque } from './cheque';

export class Transaction
{
    transId:number;
    transactionDate:String;
    transactionType:String;
    transactionAmount:number;
    chequeDetails:Cheque;
    slipNo:number;
    account:Account;
    public constructor(transId:number,transactionDate:String,transactionType:String,transactionAmount:number,chequeDetails:Cheque,slipNo:number,account:Account)
    {
        this.transId=transId;
        this.transactionDate=transactionDate;
        this.transactionType=transactionType;
        this.transactionAmount=this.transactionAmount;
        this.chequeDetails=chequeDetails;
        this.slipNo=slipNo;
        this.account=account;
    }
}