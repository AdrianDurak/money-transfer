import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SortCriteria, SortOrder, SortPhrase } from 'src/app/shared/model/sort-phrase';

@Component({
  selector: 'app-search-sort-bar',
  templateUrl: './search-sort-bar.component.html',
  styleUrls: ['./search-sort-bar.component.scss']
})
export class SearchSortBarComponent implements OnInit {
  public searchPhrase: string = '';
  public SortPhrase = SortPhrase;
  public SortOrder = SortOrder;
  public currentSort: SortCriteria = {phrase: SortPhrase.DATE, order: SortOrder.DESC};


  @Output() searchPhraseEmitter = new EventEmitter<string>();
  @Output() sortPhraseEmitter = new EventEmitter<SortCriteria>();

  ngOnInit(): void {
    this.sortPhraseEmitter.emit(this.currentSort);
  }
  /**
  * Emitts search phrase to parent component
  */
  public emitSerachPhrase(): void {
    this.searchPhraseEmitter.emit(this.searchPhrase.toLocaleLowerCase());
  }
  /**
  * Resets search input after x click
  */
  public clearSearchPhrase(): void {
    this.searchPhrase = '';
    this.emitSerachPhrase();
  }
  /**
  * Emits sort phrase to parent component
  * Decides if sort order should be changed
  */
  public emitSortPhrase(phrase: SortPhrase): void {
    if(phrase === this.currentSort.phrase) {
      this.currentSort.order = (this.currentSort.order == SortOrder.ASC) ? SortOrder.DESC : SortOrder.ASC;
    } else {
      this.currentSort.phrase = phrase;
    }
    this.sortPhraseEmitter.emit(this.currentSort);
  }
}
