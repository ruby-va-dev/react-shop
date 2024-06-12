import {createRoot} from "react-dom/client";
import 'modern-normalize'
import '@/assets/styles/index.scss'
import App from "./App";

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App/>);