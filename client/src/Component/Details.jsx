import React, { Component } from 'react';
import Skill from './Skill'
import EducationAndExperience from './EducationAndExperience';
import Hire from './Hire';

class Details extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Skill />
                <EducationAndExperience />               
                <Hire />

            </div>
         );
    }
}
 
export default Details;