import {createRoot} from "react-dom/client";
import {App} from "./App.tsx";
import './global.css';

createRoot(document.querySelector('#root')!)
  .render(<App/>)