import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import { rootReducer } from './reducer/Root.reducer'
import { rootSaga } from './saga/root.saga'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
  whitelist : ['auth']
}
const sagaMiddleware = createSagaMiddleware()

const persistedReducer = persistReducer(persistConfig, rootReducer)
const middleware = [thunk ,sagaMiddleware ]


export const store = createStore(
  persistedReducer,
  applyMiddleware(...middleware)
)

sagaMiddleware.run(rootSaga);
export let persistor = persistStore(store)

// render the application