import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryComponent } from '../books/entry/entry.component';
import { ListComponent } from '../books/list/list.component';
import { StoreModule } from '@ngrx/store';
import { featureName, reducers } from './reducers';
import { BooksComponent } from './books.component';

@NgModule({
  declarations: [BooksComponent, EntryComponent, ListComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(featureName, reducers)

  ],
  exports: [BooksComponent]
})
export class BooksModule { }
