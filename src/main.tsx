import {createRoot} from 'react-dom/client';
import {ConfigProvider} from 'antd';

import 'antd/dist/reset.css';
import {App} from './app';

createRoot(document.getElementById('root')!).render(
  <ConfigProvider>
    <App />
  </ConfigProvider>
);
