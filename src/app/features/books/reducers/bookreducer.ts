import { createReducer, on } from '@ngrx/store';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import * as actions from '../actions/book.actions';



export interface BookEntity {
  id: string;
  title: string;
  author: string;
  format: string;
}

export interface ListState extends EntityState<BookEntity> {

}

export const initialListState: ListState = {
  ids: ['X03939'],
  entities: {
    X03939: {
      id: 'X03939',
      title: 'Tom Sawyer',
      author: 'Beer',
      format: 'hardcover'
    }
  }
};

export const adapter = createEntityAdapter<BookEntity>();

export const reducer = createReducer(
  initialListState,
  on(actions.bookAddedToList, (state, { entity }) => adapter.addOne(entity, state))
);
