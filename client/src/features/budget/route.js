import { Budget } from './';
import Layout from '../finance/Layout';

export default {
  path: 'budget',
  name: 'Budget',
  component: Layout,
  childRoutes: [
    { path: '', name: 'Budget', component: Budget },
  ],
};
