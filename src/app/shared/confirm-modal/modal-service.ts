import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ModalData } from '../model/modal-data';

@Injectable()

export class ModalService {
    public modalOpenSubject: Subject<ModalData> = new Subject<ModalData>();
    public modalCloseSubject: Subject<boolean> = new Subject<boolean>();
    /**
    * Calls next method of modalOpenSubject (opens modal window)
    * @param data data for modal
    */
    open(data: ModalData): void {
        this.modalOpenSubject.next(data);
    }
    /**
    * Calls next method of modalCloseSubject (returns user decision)
    * @param modalResponse boolean which represents user decision (cancel, conirm)
    */
    close(modalResponse: boolean): void {
      this.modalCloseSubject.next(modalResponse);
    }
}
