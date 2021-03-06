import { render } from 'solid-js/web';
import App from './App';

import './assets/styles/index.css'

const dispose = render(() => <App />, document.getElementById('root') as Node);

/* HMR for SolidJS */
if (import.meta.env.MODE === 'development') {
  import.meta.hot.accept();
  import.meta.hot.dispose(dispose);
}