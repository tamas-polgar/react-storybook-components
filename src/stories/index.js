import { storiesOf } from '@storybook/react';

import { getAlertVariants } from './alert';
import { getAccordionVariants } from './accordion';
import { getButtonVariants, getButtonSizes } from './button';
import { getCardVariants } from './card';
import { getFormVariants } from './form';
import { getInputVariants } from './input';
import { getLoginVariants } from './login';
import { getSpinnerVariants } from './spinner';

storiesOf('Alert', module)
  .add('Variants', getAlertVariants);

storiesOf('Accordion', module)
  .add('Variants', getAccordionVariants);

storiesOf('Button', module)
  .add('Variants', getButtonVariants)
  .add('Sizes', getButtonSizes);

storiesOf('Card', module)
  .add('Variants', getCardVariants);

storiesOf('Form', module)
  .add('Variants', getFormVariants);

storiesOf('Input', module)
  .add('Variants', getInputVariants);

storiesOf('Login', module)
  .add('Variants', getLoginVariants);

storiesOf('Spinner', module)
  .add('Variants', getSpinnerVariants);



  