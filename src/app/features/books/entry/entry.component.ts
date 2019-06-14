import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { ListState } from '../reducers/bookreducer';
import { bookAddedToList } from '../actions/book.actions';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  // @Output() bookAdded = new EventEmitter<string>();
  constructor(private store: Store<ListState>) { }

  ngOnInit() {
  }

  add(titleElement: HTMLInputElement, authorElement: HTMLInputElement, formatElement: HTMLInputElement) {
    // this.bookAdded.emit(titleElement.value + authorElement.value + formatElement.value);

    console.log((titleElement.value + authorElement.value + formatElement.value));
    const title = titleElement.value;
    const author = authorElement.value;
    const format = formatElement.value;
    this.store.dispatch(bookAddedToList({ title, author, format }));

    titleElement.value = '';
    authorElement.value = '';
    formatElement.value = '';
    titleElement.focus(); // 'focus' just puts the cursor back in that element.
  }


}
