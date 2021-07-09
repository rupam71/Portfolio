import React, { Component } from 'react';
import Item from './Item';

class Education extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h1 className="text-center mt-5 mb-3">Education</h1>
                
                <div className="ui centered grid">
                    <Item 
                        degree = 'Bachelor of Computer Science and Engineering'
                        time = '2017-2020'
                        description = 'Successfully completed my Bachelor of Computer Science and Engineering degree from Independent University, Bangladesh. I got 3.15 out of 4.'
                        />

                    <Item 
                        degree = 'Higher Secondary Certificate'
                        time = '2013-2015'
                        description = 'Successfully completed my Higher Secondary Certificate exam from Ispahani Public School and College, Comilla. I got 4.58 out of 5. I took Science major.'
                        />

                    <Item 
                        degree = 'Secondary School Certificate'
                        time = '2008-2013'
                        description = 'Successfully completed my Secondary School Certificate exam from Feni Government Pilot High School, Feni. I got 5.0 out of 5. I took Science major.'
                        />
                </div>
            </div>
         );
    }
}
 
export default Education;