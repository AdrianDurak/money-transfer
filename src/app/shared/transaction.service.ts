import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Transaction } from './model/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  public transactionSubject: Subject<Transaction[]> = new Subject<Transaction[]>();
  private transactionsList: Transaction[] = [];
  private jsonURL = 'assets/transactions.json';

  constructor(private httpClient: HttpClient) {
    this.loadTransactions();
  }
  /**
  * Loads trasaction list from .json file
  * Calls nex method of transactionSubject
  */
  public loadTransactions(): void {
    this.httpClient.get<{data: Transaction[]}>(this.jsonURL).subscribe(transactionsList => {
      this.transactionSubject.next(transactionsList.data);
      this.transactionsList = transactionsList.data;
    })
  }
  /**
  * Adds new transaction to transactionsList
  * Calls nex method of transactionSubjec
  * @param transaction transaction object
  */
  public addTransaction(transaction: Transaction): void {
    this.transactionsList.push(transaction);
    this.transactionSubject.next(this.transactionsList);
  }
}
