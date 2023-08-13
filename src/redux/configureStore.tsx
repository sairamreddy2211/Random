import {configureStore} from '@reduxjs/toolkit';

import {loaderReducer} from './reducer';

export default configureStore({
  reducer: {
    loaderReducer,
  },
});
