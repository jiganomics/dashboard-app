// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import Layout from '../common/Layout';
import {
  DefaultPage,
  CommentBox,
} from './';

export default {
  path: 'comment',
  name: 'Comment',
  component: Layout,
  childRoutes: [
    { path: 'default-page', name: 'Default page', component: DefaultPage, isIndex: true },
    { path: 'comments', name: 'Comment box', component: CommentBox },
  ],
};
