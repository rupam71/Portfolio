import React, { Component } from 'react';
import Skill from './Skill'
import Education from './Education'
import Experience from './Experience';

class Details extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Skill />
                <div className="ui grid centered stackable">
                    <div className="eight wide column">
                        <Education />
                    </div>
                    <div className="eight wide column">
                        <Experience />
                    </div>
                </div>
                
                

            </div>
         );
    }
}
 
export default Details;