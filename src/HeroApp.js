import { Provider } from 'react-redux'

import AppRouter from "./routers/AppRouter";
import './App.css';

import { store } from "./store/store";

function HeroApp() {
  return (
      <Provider store={store}>
        <AppRouter/>
      </Provider>
  );
}
export default HeroApp;