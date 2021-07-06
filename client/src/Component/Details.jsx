import React, { Component } from 'react';
import Skill from './Skill'
import Education from './Education'

class Details extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Skill />
                <Education />
            </div>
         );
    }
}
 
export default Details;