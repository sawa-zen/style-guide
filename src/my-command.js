import React from 'react';
import { Artboard, render } from 'react-sketchapp';
import App from './components/App';

export default function(context) {
  render(
    <Artboard name="sample">
      <App />
    </Artboard>,
    context.document.currentPage()
  );
}
