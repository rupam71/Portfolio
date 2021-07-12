import React, { Component } from 'react';

class LoveIcon extends Component {
    state = { color:'black' }
    handleLove = () => {
        if(this.state.color=='black') {
            this.setState({color:'red'})
        } else {
            this.setState({color:'black'})
        }
    }
    render() { 
        return ( 
            <i 
            class="right floated like icon" 
            style={{color:this.state.color}}
            onClick={this.handleLove}
            ></i>
         );
    }
}
 
export default LoveIcon;
<i class="right floated like icon"></i>