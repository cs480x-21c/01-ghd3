import React from 'react';

import HeaderBar from '../components/HeaderBar'
import MyCircle from '../components/MyCircle'
import MyRect from '../components/MyRect'
import MyLine from '../components/MyLine'
import MyPoly from '../components/MyPoly'

class Project1PageView extends React.Component{

    state = {
            
    };

    render(){
        return(
            <div>
                <HeaderBar/>
                <h4>Refresh Page to change circle size!</h4>
                <MyCircle/>
                <MyLine/>
                <MyRect/>
                <MyPoly/>

            </div>
        );
    }
}

export default Project1PageView;
