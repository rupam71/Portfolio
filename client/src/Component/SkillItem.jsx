const SkillItem = ({percent,name}) => {
    return ( 
        <div className="column">
        <div  style={{margin:'2%'}}>
            <div className="ui grid">                
                <dib className="twelve wide column">
                    <h5 style={{marginLeft:'12px'}}>{name}</h5>
                </dib>
                <dib className="four wide column">
                    <h5 className="skillName">{percent}%</h5>
                </dib>                
            </div>
            <div class="ui progress black mt-1" style={{height:".2cm",marginLeft:'10px',width:'100%',backgroundColor:'white'}}>
                <div class="bar" style={{width:`${percent}%`,backgroundColor:'#074f80'}}></div>
            </div>
        </div></div>
     );
}
 
export default SkillItem;