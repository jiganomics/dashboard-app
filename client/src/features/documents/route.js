import Layout from './Layout';
import {
  DefaultPage,
} from './';

export default {
  path: 'documents',
  name: 'Documents',
  component: Layout,
  childRoutes: [
    { path: '', name: 'Default Page', component: DefaultPage },
  ],
};
