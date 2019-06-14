export const featureName = 'book';
import * as fromList from './bookreducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BookItem } from '../models/book-item';

export interface State {
  list: fromList.ListState;
}

export const reducers = {
  list: fromList.reducer
};

const selectFeature = createFeatureSelector<State>(featureName);

const selectListBranch = createSelector(selectFeature, f => f.list);

const { selectAll: selectAllBooks } = fromList.adapter.getSelectors(selectListBranch);


export const selectBooks = createSelector(selectAllBooks, s => s as BookItem[]);
