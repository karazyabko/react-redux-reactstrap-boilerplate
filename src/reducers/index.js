import { combineReducers } from 'redux';
import { reducer as form} from 'redux-form';
import sharedReducer from './shared-reducer';

const rootReducer = combineReducers({
  form,
  shared: sharedReducer
});

export default rootReducer;