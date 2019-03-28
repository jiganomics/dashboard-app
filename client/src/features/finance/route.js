import { HomePage, Layout } from './';

export default {
  path: 'finances',
  name: 'Home Page',
  component: Layout,
  childRoutes: [
    { path: '', name: 'Home Page', component: HomePage },
  ],
};
