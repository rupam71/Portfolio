import React, { Component } from 'react';
import Image from './Image';
import image from './../Image/image2.jpg'
import AllIcons from './AllIcons';
import AboutList from './AboutList';

class About extends Component {
    state = {  }
    render() { 
        return ( 
            <div id="me">
                <Image image={image} />
                <div className="text-center text-white">
                    <h2>Hello! I'M</h2>
                    <h1><b>Hossain Sahriar Kabir</b></h1>
                    <h5>React Developer</h5>

                    <div className="ui center aligned grid">
                        <div className="fourteen wide mobile ten wide tablet twelve wide computer twelve wide large screen column">                            
                            <h5 style={{textAlign:'justify', margin:'20px 0 0 0'}}>
                                My name is Hossain Sahriar Kabir. I am 23 years old. I completed my 
                                undergraduate study at Independent University, Bangladesh. I have more 
                                than 2 years of experience as a Web Developer. I have skills in  
                                <b style={{fontSize:'20px'}}> React Js Redux Node Js Express Js and MongoDB. </b> 
                                I can write both front-end and back-end code.                                  
                                Well-versed in numerous programming 
                                language including <b style={{fontSize:'20px'}}>Javascript.</b> I have a 
                                strong eye for design and am committed to building highly functional, 
                                beautiful, and intuitive sites. I always try to learn and adopt new 
                                technology.
                            </h5>
                        </div>
                    </div>
                    
                    <AboutList />
                    <AllIcons />
                    
                    
                </div>
            </div>
         );
    }
}
 
export default About;