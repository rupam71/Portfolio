import React, { Component } from 'react';

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="ui centered grid navigation">
                <div className="center aligned column">
                    <div className="ui secondary compact menu">
                        <a href="#me" 
                        className="navitem active item text-white">
                            Me
                        </a>
                        <a href="#skill" 
                        className="navitem item text-white">
                            Skill
                        </a>
                        <a href="#myWork" 
                        className="navitem item text-white">
                            My Work
                        </a>
                        <a href="#contact" 
                        className="navitem item text-white">
                            Contact
                        </a>
                        <a href="#" 
                        className="navitem item text-white">
                            Blog
                        </a>
                    </div>
                </div>
            </div>
         );
    }
}

export default Navbar;