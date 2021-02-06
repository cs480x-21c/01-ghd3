import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
 
class HeaderBar extends Component {

    state = {
        resumeLink: [],
    };

    render() {
        return (
        <header>

            <div className="logo">

                <h1>
                    CS4801 - Project Site
                </h1>

            </div>

            <div className="navigationMenu">

                <ul>
                    <li>
                        <Button className="navButton" to="/" component={Link}>
                            Home
                        </Button>
                    </li>

                    <li>
                        <Button className="navButton" to="/project1" component={Link}>
                            Project1
                        </Button>
                    </li>
                </ul>
                
            </div>
            
        </header>
        );
    }
}

 
export default HeaderBar;