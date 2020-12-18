import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionFormComponent } from './transaction-form/transaction-form.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchSortBarComponent } from './transaction-list/search-sort-bar/search-sort-bar.component';
import { ListItemComponent } from './transaction-list/list-item/list-item.component';
import { CommonModule } from '@angular/common';
import { ConfirmModalComponent } from './shared/confirm-modal/confirm-modal.component';
import { ModalService } from './shared/confirm-modal/modal-service';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateApiLoader } from './translate/translate.loader';

@NgModule({
  declarations: [
    AppComponent,
    TransactionFormComponent,
    TransactionListComponent,
    SearchSortBarComponent,
    ListItemComponent,
    ConfirmModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: () => new TranslateApiLoader(),
      },
      defaultLanguage: 'en'
    }),
  ],
  providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
