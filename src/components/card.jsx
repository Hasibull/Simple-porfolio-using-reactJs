import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'

class Card extends Component {
    render() {
        return(
            <div className="row">
                <div className="bg-warning col">
                    <h1 className="text-white btn btn-info m-5">Hello world</h1>
                </div>
                <div className="col-lg-8 bg-success">
                    <button className="btn btn-primary m-5">Click Me</button>
                </div>
            </div>
        );
    }
}

export default Card;