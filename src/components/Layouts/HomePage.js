import React, { useState, useEffect } from 'react';
import BmiForm from '../BMIForm/BmiForm';
import Header from './Header';
import BarChart from '../Chart/BarChart';
import InfoCards from '../InfoCards/InfoCards';
import { getData, storeData } from '../../helpers/localStorge';

import { v4 as uuidv4 } from 'uuid';

function HomePage() {
    const initialState = () => getData('data') || [];
    const [state, setState] = useState(initialState);
    const [data, setData] = useState({});

    useEffect(() => {
        storeData('data', state);
        const date = state.map(obj => obj.date);
        const bmi = state.map(obj => obj.bmi);
        let newData = { date, bmi };
        setData(newData);
    }, [state]);

    const handleChange = val => {
        let heightInM = val.height / 100;
        val.bmi = (val.weight / (heightInM * heightInM)).toFixed(2);
        val.id = uuidv4();
        let newVal = [...state, val];
        let len = newVal.length;
        if (len > 7) newVal = newVal.slice(1, len);
        setState(newVal);
    }

    const handleDelete = id => {
        storeData('lastState', state); //handel undo event
        let newState = state.filter(i => {
            return i.id !== id;
        })
        setState(newState);
    };

    const handleUndo = () => {
        setState(getData('lastState'))
    }

    return (
        <>
            <div className="mb-4">
                <Header />
            </div>
            <main>
                <div className='container'>
                    <div className='row'>
                        <div className='col m12 s12'>
                            <BmiForm change={handleChange} />
                            <BarChart labelData={data.date} bmiData={data.bmi} />
                            <div>
                                <div className="row center">
                                    <h4 className="white-text">7 Day Data</h4>
                                </div>
                                <div className='data-container row'>
                                    {
                                        state.length > 0
                                            ? (<>
                                                {state.map(info => (
                                                    <InfoCards
                                                        key={info.id}
                                                        id={info.id}
                                                        weight={info.weight}
                                                        height={info.height}
                                                        date={info.date}
                                                        bmi={info.bmi}
                                                        deleteCard={handleDelete}
                                                    />
                                                ))}
                                            </>)
                                            :
                                            (
                                                <div className='center white-text'>Enter New data</div>
                                            )
                                    }
                                </div>
                            </div>
                            {
                                getData('lastState') !== null
                                    ? (
                                        <div className='center'>
                                            <button className='calculate-btn' onClick={handleUndo}>
                                                Undo
                                        </button>
                                        </div>
                                    )
                                    : (
                                        ''
                                    )
                            }

                        </div>
                    </div>
                </div>
            </main>
        </>


    )
}

export default HomePage;