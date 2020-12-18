import { HttpClientModule } from '@angular/common/http';
import { TestBed, async } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { AppComponent } from './app.component';
import { ConfirmModalComponent } from './shared/confirm-modal/confirm-modal.component';
import { ModalService } from './shared/confirm-modal/modal-service';
import { TransactionFormComponent } from './transaction-form/transaction-form.component';
import { ListItemComponent } from './transaction-list/list-item/list-item.component';
import { SearchSortBarComponent } from './transaction-list/search-sort-bar/search-sort-bar.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule, 
        ReactiveFormsModule, 
        TranslateModule.forRoot(), 
        HttpClientModule,
        TranslateModule.forRoot()
      ],
      declarations: [
        AppComponent,
        TransactionFormComponent,
        TransactionListComponent,
        ConfirmModalComponent,
        SearchSortBarComponent,
        ListItemComponent
      ],
      providers: [ModalService]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'money-transfer'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('money-transfer');
  });
});
