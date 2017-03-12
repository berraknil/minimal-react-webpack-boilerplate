import React from 'react';
import ReactDOM from 'react-dom';

const title = 'Minimal React Webpack Babel Boilerplate';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();