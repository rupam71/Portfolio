import React, { Component } from 'react';
import Education from './Education'
import Experience from './Experience';

class EducationAndExperience extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="ui grid centered stackable">
                    <div className="eight wide column">
                        <Education />
                    </div>
                    <div className="eight wide column">
                        <Experience />
                    </div>
                </div>
         );
    }
}
 
export default EducationAndExperience;