import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import allReducers from '@/redux/reducer'
import '@/styles/globals.css'

const store = createStore(allReducers, applyMiddleware(thunk));

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
