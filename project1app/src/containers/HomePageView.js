import React from 'react';

import HeaderBar from '../components/HeaderBar'

class HomePageView extends React.Component{

    state = {
            
    };

    render(){
        return(
            <div>
                <HeaderBar/>

                <h5 onMouseOver="font">
                    This website will host Kenny Rhodes' projects for the course.
                </h5>

                <footer>
                                
                </footer>
            </div>
        );
    }
}

export default HomePageView;
