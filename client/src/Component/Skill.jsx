import React, { Component } from 'react';
import SkillItem from './SkillItem';

class Skill extends Component {
    state = {  }
    render() { 
        return ( 
            <div id="skill" className='skilldiv'>
                <h1 className="text-center pt-5 mb-4">Skill</h1>
                <div className="ui grid">
                    <div class="two column row">
                        <SkillItem percent='90' name='HTML'/>
                        <SkillItem percent='80' name='CSS'/>
                        <SkillItem percent='75' name='React Js'/>
                        <SkillItem percent='65' name='Redux'/>
                        <SkillItem percent='50' name='Javascript'/>
                        <SkillItem percent='65' name='Node Js'/>
                        <SkillItem percent='65' name='Express Js'/>
                        <SkillItem percent='70' name='MongoDB'/>
                        <SkillItem percent='95' name='Git'/>
                        <SkillItem percent='80' name='Development'/>                   
                    </div>
                </div>
                <div className="pb-5"></div>
            </div>
         );
    }
}
 
export default Skill;