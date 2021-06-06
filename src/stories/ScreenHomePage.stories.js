import React from 'react';
import { storiesOf } from '@storybook/react';
import HomePage from '../components/Layouts/HomePage'

storiesOf("Screen/HomePage", module)
    .add("HomePage", () => <HomePage />)