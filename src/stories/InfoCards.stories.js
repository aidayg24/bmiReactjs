import React from 'react';
import { storiesOf } from '@storybook/react';
import InfoCards from '../components/InfoCards/InfoCards'

const props = {
    weight: "50",
    height: "176",
    id: "2b926f1b-db1f-45ac-af87-2130da1e1a2f",
    date: "10/25/2019",
    bmi: "16.14",
    // deleteCard: jest.fn()
};

storiesOf("BMI/InfoCards", module)
    .add("bmi InfoCards", () => <InfoCards {...props} />)