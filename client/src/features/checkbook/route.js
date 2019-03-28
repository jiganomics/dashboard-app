import { Checkbook, CheckbookForm } from './';
import Layout from '../finance/Layout';

export default {
  path: 'checkbook',
  name: 'Checkbook',
  component: Layout,
  childRoutes: [
    { path: 'checkbook', name: 'Checkbook', component: Checkbook, isIndex: true },
    { path: 'entry', name: 'Checkbook form', component: CheckbookForm },
  ],
};
