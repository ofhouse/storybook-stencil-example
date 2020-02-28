import { storiesOf } from '@storybook/html';

import readme from './readme.md';

storiesOf('My Component', module).add(
  'Default',
  () =>
    '<my-component first="Millie" middle="Bobby" last="Brown"></my-component>',
  {
    notes: {
      markdown: readme,
    },
  }
);
