import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';

import { ConfirmModalComponent } from './confirm-modal.component';
import { ModalService } from './modal-service';

describe('ConfirmModalComponent', () => {
  let component: ConfirmModalComponent;
  let fixture: ComponentFixture<ConfirmModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, TranslateModule.forRoot()],
      declarations: [ ConfirmModalComponent ],
      providers: [ModalService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open modal', () => {
    const de = fixture.debugElement.query(By.css('.modal-container'));
    expect(de.nativeElement.classList).not.toContain('fade-in');
    component.openModal({opened: true});
    fixture.detectChanges();
    expect(de.nativeElement.classList).toContain('fade-in');
  });

  it('should close modal', () => {
    const de = fixture.debugElement.query(By.css('.modal-container'));
    component.openModal({opened: true});
    fixture.detectChanges();
    expect(de.nativeElement.classList).toContain('fade-in');
    component.closeModal(false);
    fixture.detectChanges();
    expect(de.nativeElement.classList).not.toContain('fade-in');
  });
});
