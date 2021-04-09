import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Education extends Component {

    render() { 
        return ( 
            <React.Fragment>
                <div className="container mt-5">
                    <h1 className="display-4">Eduacation</h1>
                    <div className="container pt-4">
                        <h2>B.Sc in ECE</h2>
                        <h4>Hajee Mohammad Danesh Science and Technology University</h4>
                        <h5 className="text-info">2018-2021</h5>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Education;