import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './CommentBox';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<CommentBox />, document.getElementById('root'));
registerServiceWorker();
