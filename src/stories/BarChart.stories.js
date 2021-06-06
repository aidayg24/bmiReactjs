import React from 'react';
import { storiesOf } from '@storybook/react';
import BarChart from '../components/Chart/BarChart';

const prop = {
    labelData: ["27/10/2019"],
    bmiData: ["16.14"]
};

storiesOf("BMI/Chart", module)
    .add("bmi chart", () => <BarChart {...prop} />)
