const SkillItem = ({percent,name}) => {
    return ( 
        <div className="column">
        <div  style={{margin:'2%'}}>
            <div className="ui grid">
                <div class="two column row">
                    <dib className="column left aligned">
                        <h5 style={{marginLeft:'12px'}}>{name}</h5>
                    </dib>
                    <dib className="column right aligned">
                        <h5>{percent}%</h5>
                    </dib>
                </div>
            </div>
            <div class="ui progress black" style={{height:".2cm"}}>
                <div class="bar" style={{width:`${percent}%`}}></div>
            </div>
        </div></div>
     );
}
 
export default SkillItem;