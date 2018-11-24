// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import Layout from '../common/Layout';
import {
  Checkbook,
  CheckbookForm,
} from './';

export default {
  path: 'checkbook',
  name: 'Checkbook',
  component: Layout,
  childRoutes: [
    { path: 'checkbook', name: 'Checkbook', component: Checkbook, isIndex: true },
    { path: 'entry', name: 'Checkbook form', component: CheckbookForm },
  ],
};
