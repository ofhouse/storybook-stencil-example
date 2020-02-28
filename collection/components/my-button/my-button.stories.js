import { storiesOf } from '@storybook/html';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withActions } from '@storybook/addon-actions';
import { h } from 'jsx-dom';

import readme from './readme.md';

storiesOf('My Button', module)
  .addDecorator(withActions('onClick'))
  .addDecorator(withKnobs)
  .add(
    'Default',
    () => {
      const label = text('label', 'Label');
      return (
        <my-button
          label={label}
          onClick={() => {
            console.log('Clicked');
          }}
        ></my-button>
      );
    },
    {
      notes: {
        markdown: readme,
      },
    }
  );
