import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs/operators';
import { ModalService } from '../shared/confirm-modal/modal-service';
import { ModalData } from '../shared/model/modal-data';
import {Transaction, UserTransaction, UserTransactionData } from '../shared/model/transaction';
import { TransactionService } from '../shared/transaction.service';
import { amountValidator } from '../shared/validators/amount.validator';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.scss']
})
export class TransactionFormComponent implements OnInit {
  public transactionForm: FormGroup;
  private currentBalance: number = 5824.76;

  constructor(private fb: FormBuilder, private modalService: ModalService, private transactionService: TransactionService) { 
    this.transactionForm = this.fb.group({
      fromAccount: [{value: '', disabled: true}],
      toAccount: ['', [Validators.required]],
      amount: ['',[Validators.required, amountValidator(this.currentBalance)]],
    })
  }

  ngOnInit(): void {
    this.patchForm();
  }
  /**
  * Triggers confirmation modal
  */
  public confirmTransaction(): void {
    const modalData: ModalData = {opened: true, ...this.transactionForm.getRawValue()}
    this.modalService.open(modalData);
    this.modalService.modalCloseSubject.pipe(take(1)).subscribe(confirmed => {
      if(confirmed) {
        this.sendTransaction();
      }
    })
  }
  /**
  * Creates new transaction object, adds transaction by service, calls resetFormAndAdjustBalance method
  */
  private sendTransaction(): void {
    const transactionBody: UserTransactionData = {
      date: Date.now(),
      amount: this.transactionForm.get('amount').value,
      merchantName: this.transactionForm.get('toAccount').value
    }
    const transaction: Transaction = new UserTransaction(transactionBody);

    this.transactionService.addTransaction(transaction);

    this.resetFormAndAdjustBalance();
  }
  /**
  * Decrease user current balance, resets from to initial state
  */
  private resetFormAndAdjustBalance(): void {
    this.currentBalance -= this.transactionForm.get('amount').value;
    this.transactionForm.reset();
    this.patchForm();
  }
  /**
  * Patches form with initial data
  */
  private patchForm(): void {
    this.transactionForm.get('fromAccount').patchValue(`Free Checking(4692) €${this.currentBalance}`)
  }
}
