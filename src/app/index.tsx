import {observer} from 'mobx-react-lite';
import {ConfigProvider, Spin} from 'antd';
import {RouterProvider} from 'react-router-dom';
import {AppRoutes} from '@routes/AppRoutes/AppRoutes.tsx';
import 'antd/dist/reset.css';

export const App = observer(() => {
  return (
    <ConfigProvider>
      <RouterProvider router={AppRoutes} fallback={<Spin />} />
    </ConfigProvider>
  );
});
