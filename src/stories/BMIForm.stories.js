import React from 'react';
import { storiesOf } from '@storybook/react';
import BMIForm from '../components/BMIForm/BmiForm'

storiesOf("BMI/BMIForm", module)
    .add("bmi BMIForm", () => <BMIForm />)