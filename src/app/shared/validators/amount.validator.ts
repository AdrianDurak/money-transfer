import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function amountValidator(currentBalance: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const balance = currentBalance;
    const amount = control.value;
    
    if(isNaN(amount)) {
      return {invalidAmount: true}
    } else if(balance - amount < -500) {
      return {lackOfFunds: true}
    }
    return null;
  }
}