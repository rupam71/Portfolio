import React, { Component } from 'react';
import MyWorkItem from './MyWorkItem';

class MyWork extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="mywork">
                <h1 className="text-center text-white py-4">My Work</h1>

                <div className="ui centered grid">
                    <MyWorkItem 
                        github = 'https://github.com/rupam71/Emaily'
                        url = 'https://rupam-emaily-server.herokuapp.com'
                        name ="Emaily"
                        description = "Emaily is a system, where user can create question pool, email this to participant and get result. But to do this, user must buy credit via their credit card."
                        />
                    <MyWorkItem 
                        github = 'https://github.com/rupam71/React_Redux_Project/tree/master/Stream_App'
                        url = ''
                        name ="Stream_App"
                        description = "A simple Streem System mady by React and Redux. It was my very first React Redux project. This is beginner project. There you can create stream, edit it delete it."
                        />
                    <MyWorkItem 
                        github = 'https://github.com/rupam71/REACT-REDUX-TODO-APP'
                        url = ''
                        name ="REACT-REDUX-TODO-APP"
                        description = "Toda application made by React Redux"
                        />
                    <MyWorkItem 
                        github = 'https://github.com/rupam71/R'
                        url = ''
                        name ="R"
                        description = "Complete Setup of a MERN Application."
                        />
                </div>
            </div>
         );
    }
}
 
export default MyWork;