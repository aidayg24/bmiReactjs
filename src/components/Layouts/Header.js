import React, { Component } from 'react';


class Header extends React.Component {

    state = { currentDate: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate() }


    render() {

        return (

            <header>
                <div className="navbar navbar-dark bg-dark navbar-expand-md shadow-sm">
                    <div className="container d-flex justify-content-between">
                        <strong className="navbar-brand d-flex align-items-center">BMI claculator</strong>

                    </div>
                    <div className="me-5">
                        <div style={{ color: 'white' }}>
                            {this.state.currentDate}
                        </div>
                    </div>
                </div>
            </header>

        )
    }


}

export default Header;