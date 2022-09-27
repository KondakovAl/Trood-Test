import { combineReducers, legacy_createStore as createStore } from 'redux';
import { filterReducer } from './reducers/filter.reducer';
import { popupsReducer } from './reducers/popups.reducer';

const rootReducer = combineReducers({
  filters: filterReducer,
  popups: popupsReducer,
});

export type RootState = ReturnType<typeof rootReducer>

const store = createStore(rootReducer);

export { store };
