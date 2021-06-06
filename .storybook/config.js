import { addParameters, configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import crfTheme from './crfTheme';
import 'bootstrap/dist/css/bootstrap.css';
import '../src/styles/mainStyle.css';
import 'materialize-css/dist/css/materialize.min.css';


addParameters({
  options: {
    theme: crfTheme
  }
})





addDecorator(withInfo({
  inline: true
}))



const req = require.context("../src/stories", true, /\.stories\.js/);

function loadStories() {
  req.keys().forEach(filename => req(filename));

}

configure(loadStories, module);