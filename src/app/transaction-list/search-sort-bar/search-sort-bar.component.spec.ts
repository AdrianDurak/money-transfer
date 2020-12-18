import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';

import { SearchSortBarComponent } from './search-sort-bar.component';

describe('SearchSortBarComponent', () => {
  let component: SearchSortBarComponent;
  let fixture: ComponentFixture<SearchSortBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, TranslateModule.forRoot(), HttpClientModule],
      declarations: [ SearchSortBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSortBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit search phrase on input', () => {
    let spy = spyOn(component.searchPhraseEmitter as any, 'emit');
    const de = fixture.debugElement.query(By.css('input'));
    de.triggerEventHandler('input', { target: de.nativeElement});
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  })

  it('should emit sort phrase on click', () => {
    let spy = spyOn(component.sortPhraseEmitter as any, 'emit');
    const de = fixture.debugElement.queryAll(By.css('li'));
    de[0].nativeElement.dispatchEvent(new Event('click'));
    expect(spy).toHaveBeenCalledWith({ phrase: 'DATE', order: 'ASC' });
    spy.calls.reset();
    de[1].nativeElement.dispatchEvent(new Event('click'));
    expect(spy).toHaveBeenCalledWith({ phrase: 'BENEFICIARY', order: 'ASC' });
    spy.calls.reset();
    de[2].nativeElement.dispatchEvent(new Event('click'));
    expect(spy).toHaveBeenCalledWith({ phrase: 'AMOUNT', order: 'ASC' });
  });
});
