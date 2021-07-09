import React, { Component } from 'react';
import { connect } from 'react-redux';
import About from './About'
import Details from './Details';

class Home extends Component {
    state = {  }
    
    render() { 
        return ( 
            <div class="ui grid stackable">
                <div class="sixteen wide tab six wide computer column sixCol">  
                    <div className="sticky-top">
                        <About />
                    </div>
                </div>
                <div class="sixteen wide tab ten wide computer column sixColt">
                    <Details />
                </div>
            </div>
         );
    }
}
 
const mapStateToProps = (state) => {
    return {
        user : state.auth.user
    }
}
export default connect(mapStateToProps,{})(Home);