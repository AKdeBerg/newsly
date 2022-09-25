import '../styles/globals.css';
import Navbar from '../components/navbar';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from '../store/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from '../store/sagas';

function MyApp({ Component, pageProps }) {
  const sagaMiddleware = createSagaMiddleware();
  // const store = createStore(reducers, applyMiddleware(sagaMiddleware));
  const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(sagaMiddleware)));

  sagaMiddleware.run(rootSaga);

  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
