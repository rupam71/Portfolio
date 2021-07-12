import React, { Component } from 'react';
import Skill from './Skill'
import EducationAndExperience from './EducationAndExperience';
import Hire from './Hire';
import MyWork from './MyWork';
import Navbar from './Navbar';

class Details extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{marginBottom:'-1rem'}}>
                <Navbar />
                <Skill />
                <EducationAndExperience />               
                <Hire />
                <MyWork />
            </div>
         );
    }
}
 
export default Details;