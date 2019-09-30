import { storiesOf } from '@storybook/react';

import { getAlertVariants } from './alert';
import { getAccordionVariants } from './accordion';
import { getButtonVariants, getButtonSizes } from './button';
import { getCardVariants } from './card';
import { getSpinnerVariants } from './spinner';
import { getInputVariants } from './input';

storiesOf('Alert', module)
  .add('Variants', getAlertVariants);

storiesOf('Accordion', module)
  .add('Variants', getAccordionVariants);

storiesOf('Button', module)
  .add('Variants', getButtonVariants)
  .add('Sizes', getButtonSizes);

storiesOf('Card', module)
  .add('Variants', getCardVariants);

storiesOf('Input', module)
  .add('Variants', getInputVariants);

storiesOf('Spinner', module)
  .add('Variants', getSpinnerVariants);



  