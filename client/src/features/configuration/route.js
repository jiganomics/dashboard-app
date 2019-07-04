import { Configuration } from './';
import Layout from '../finance/Layout';

export default {
  path: 'configuration',
  name: 'Configuration',
  component: Layout,
  childRoutes: [
    { path: '', name: 'Configuration', component: Configuration },
  ],
};
