import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ProfilePic from '../img/profile.jpg';


class AboutMe extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <div className="container bg-white mt-3 pt-5">
                    <div className="row">
                        <div className="col-lg-7 pt-5">
                            <h1 style={{fontSize: "60px"}}>Hasibul Islam</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore molestiae porro non placeat ipsam in dicta voluptate laudantium illo. Cum doloremque voluptatem delectus voluptatibus beatae nam amet veritatis deleniti minus!</p>
                        </div>
                        <div className="col pl-5 text-center">
                            <img className="border rounded-circle" src={ProfilePic} alt="Profilepicture"/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default AboutMe;