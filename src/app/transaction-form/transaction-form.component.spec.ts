import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ModalService } from '../shared/confirm-modal/modal-service';
import { TransactionService } from '../shared/transaction.service';

import { TransactionFormComponent } from './transaction-form.component';

describe('TransactionFormComponent', () => {
  let component: TransactionFormComponent;
  let fixture: ComponentFixture<TransactionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, TranslateModule.forRoot(), HttpClientModule],
      declarations: [ TransactionFormComponent ],
      providers: [FormBuilder, ModalService, TransactionService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should patch form on init', () => {
    fixture.detectChanges();
    const inputValue =  component.transactionForm.get('fromAccount').value;
    expect(inputValue).toEqual('Free Checking(4692) €5824.76');
  });

  it('should call modal service with proper values', () => {
    const spy = spyOn(component['modalService'] as any, 'open');
    component.transactionForm.patchValue({
      toAccount: 'test',
      amount: '10'
    })
    component.confirmTransaction();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalledWith({
      opened: true,
      fromAccount: 'Free Checking(4692) €5824.76',
      toAccount: 'test',
      amount: '10'
    });
  });

  it('should send transaction and call resetFormAndAdjustBalance method',() => {
    const transSpy = spyOn(component['transactionService'], 'addTransaction');
    const resetSpy  = spyOn(component as any, 'resetFormAndAdjustBalance');
    component.transactionForm.patchValue({
      toAccount: 'test',
      amount: '10'
    })
    component['sendTransaction']();
    expect(transSpy).toHaveBeenCalled();
    expect(resetSpy).toHaveBeenCalled();
  });

  it('should decrease balance, reset form and call patchForm() method', () => {
    const resetSpy  = spyOn(component as any, 'patchForm');
    expect(component['currentBalance']).toEqual(5824.76);
    component.transactionForm.patchValue({
      toAccount: 'test',
      amount: '10'
    });
    component['resetFormAndAdjustBalance']();
    expect(component.transactionForm.get('toAccount').value).toEqual(null);
    expect(component.transactionForm.get('amount').value).toEqual(null);
    expect(component['currentBalance']).toEqual(5814.76);
  });
});
