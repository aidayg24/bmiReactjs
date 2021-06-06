import React from 'react';
import PropTypes from 'prop-types';

function InfoCards({ weight, height, id, date, bmi, deleteCard }) {
    const handleDelete = () => {
        deleteCard(id);
    }

    return (
        <div className="col m6 s12">
            <div className="card">
                <div className="card-content">
                    <span className="card-title" data-test="bmi">
                        BMI : {bmi}
                    </span>
                    <div className="card-data">
                        <span data-test="weight">weight : {weight} kg</span>
                        <span data-test="height">height : {height} cm</span>
                        <span data-test="date">date  : {date} </span>
                    </div>
                    <button className="delete-btn" onClick={handleDelete}>
                        X
                    </button>
                </div>
            </div>
        </div>
    )
};

InfoCards.propTypes = {
    weight: PropTypes.string,
    height: PropTypes.string,
    id: PropTypes.string,
    date: PropTypes.string,
    bmi: PropTypes.string,
    deleteCard: PropTypes.func
}

export default InfoCards;