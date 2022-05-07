import * as React from 'react';
import { render } from 'react-dom';

import App from '../app/index';

document.addEventListener("DOMContentLoaded", () => {
  const container = document.createElement('div');
  container.style.height = '100%';
  render(<App />, document.body.appendChild(container));
});