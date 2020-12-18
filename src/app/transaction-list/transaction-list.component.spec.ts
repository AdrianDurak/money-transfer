import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SortPhrase, SortOrder } from '../shared/model/sort-phrase';
import { UserTransaction } from '../shared/model/transaction';
import { TransactionService } from '../shared/transaction.service';
import { ListItemComponent } from './list-item/list-item.component';
import { SearchSortBarComponent } from './search-sort-bar/search-sort-bar.component';

import { TransactionListComponent } from './transaction-list.component';

const transactionMock = [
  new UserTransaction({date: 10, amount: '11', merchantName: 'c'}),
  new UserTransaction({date: 11, amount: '12', merchantName: 'a'}),
  new UserTransaction({date: 12, amount: '10', merchantName: 'b'}),
]

describe('TransactionListComponent', () => {
  let component: TransactionListComponent;
  let fixture: ComponentFixture<TransactionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, TranslateModule.forRoot(), HttpClientModule],
      declarations: [TransactionListComponent, ListItemComponent, SearchSortBarComponent],
      providers: [TransactionService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('filter transactions', () => {
    fixture.detectChanges();
    component.transactions = transactionMock;
    component.filterTransaction('c');
    expect(component.filteredTransactions.length).toEqual(1);
  });

  it('should sort transactions', () => {
    fixture.detectChanges();
    component.filteredTransactions = transactionMock;
    component.sortTransactions({phrase: SortPhrase.DATE, order: SortOrder.DESC})
    expect(component.filteredTransactions[0].dates.valueDate).toEqual(12);
    component.sortTransactions({phrase: SortPhrase.DATE, order: SortOrder.ASC})
    expect(component.filteredTransactions[0].dates.valueDate).toEqual(10);
  })
});
