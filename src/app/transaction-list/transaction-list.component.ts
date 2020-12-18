import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SortCriteria, SortOrder, SortPhrase } from '../shared/model/sort-phrase';
import { Transaction } from '../shared/model/transaction';
import { TransactionService } from '../shared/transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {
  public transactions: Transaction[] = [];
  public filteredTransactions: Transaction[] = [];
  public currentSearchPhrase: string = '';
  private currentSort: SortCriteria = {phrase: SortPhrase.DATE, order: SortOrder.DESC};
  private transactionSub: Subscription;
  constructor(private transactionService: TransactionService) { }
  /**
  * Subscribes to transactions subject
  */
  ngOnInit(): void {
    this.transactionSub =  this.transactionService.transactionSubject.subscribe(response => {
      this.transactions = response;
      this.filteredTransactions = response;
      this.filterTransaction(this.currentSearchPhrase);
    });
  }
  /**
  * Filters transactions
  * @param searchPhrase phrase used for filtering
  */
  public filterTransaction(searchPhrase: string): void {
    this.currentSearchPhrase = searchPhrase;
    this.filteredTransactions = this.transactions.filter(transaction => {
      return (
        transaction.transaction.type.toLocaleLowerCase().includes(searchPhrase) ||
        transaction.merchant.name.toLocaleLowerCase().includes(searchPhrase) ||
        transaction.transaction.amountCurrency.amount.toString().includes(searchPhrase)
      );
    })
    this.sortTransactions(this.currentSort);
  }
  /**
  * Sorts transactions
  * @param sortCriteria sorting criteria, phrase and order
  */
  public sortTransactions(sortCriteria: SortCriteria): void {
    this.currentSort = sortCriteria;
    
    this.filteredTransactions = this.filteredTransactions.sort((a, b) => {
      let valueA: string | number;
      let valueB: string | number;
      let comparision: number = 0;

      if(sortCriteria.phrase === SortPhrase.DATE) {
        valueA = a.dates.valueDate;
        valueB = b.dates.valueDate;
      }
      if(sortCriteria.phrase === SortPhrase.BENEFICIARY) {
        valueA = a.merchant.name.toLocaleLowerCase();
        valueB = b.merchant.name.toLocaleLowerCase();
      }
      if(sortCriteria.phrase === SortPhrase.AMOUNT) {
        valueA = Number(a.transaction.amountCurrency.amount);
        valueB = Number(b.transaction.amountCurrency.amount);
      }

      if(valueA > valueB) {
        comparision = 1;
      } else if (valueB > valueA) {
        comparision = -1;
      }
      return sortCriteria.order === SortOrder.ASC ? comparision : comparision * -1;
    });
  }

  ngOnDestroy() {
    if(this.transactionSub) {
      this.transactionSub.unsubscribe();
    }
  }
}
