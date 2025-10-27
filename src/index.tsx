import {createRoot} from "react-dom/client";
import {App} from "./App.tsx";
import './global.css';
import {Provider} from "react-redux";
import {store} from "./store.ts";

createRoot(document.querySelector('#root')!)
  .render(
    <Provider store={store}>
      <App/>
    </Provider>
  )