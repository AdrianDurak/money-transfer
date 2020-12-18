import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalData } from '../model/modal-data';
import { ModalService } from './modal-service';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent {
  private modalEventsSubscription: Subscription;
  modalData: ModalData = {opened: false};

  constructor(public modalService: ModalService) {
    this.modalEventsSubscription = this.modalService.modalOpenSubject.subscribe(
      data => this.openModal(data)
    )
  }
  /**
  * Opens transaction confirm modal
  * @param data modal data
  */
  public openModal(data){
    this.modalData = data;
  }
  /**
  * Closes modal
  * Calls modal service close method
  * @param status boolean which represents user decision (cancel, conirm)
  */
  public closeModal(status: boolean){
    this.modalData = {opened: false};
    this.modalService.close(status)
  }

  ngOnDestroy() {
    this.modalEventsSubscription.unsubscribe();
  }
}
