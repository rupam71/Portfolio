import React, { Component } from 'react';
import Item from './Item';

class Experience extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h1 className="text-center my-3 text-white">Experience</h1>

                <div className="ui centered grid">
                    <Item 
                        degree = {<a href='https://www.linkedin.com/company/mechanic-koi/mycompany/' style={{textDecoration:'none',color:'white'}}>Mechanic koi</a>}
                        time = '2021-Present'
                        description = 'Internship as a React Developer'
                        />
                </div>
            </div>
         );
    }
}
 
export default Experience;