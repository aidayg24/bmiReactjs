import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from '../components/Layouts/Header'

storiesOf("Screen/Header", module)
    .add("Header", () => <Header />)