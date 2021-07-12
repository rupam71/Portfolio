const Item = ({degree,time,description}) => {
    return ( 
    <div className="sixteen wide computer fifteen wide large screen column" style={{backgroundColor:''}}>
        <div className="ui cards mx-2">
            <div class="card" style={{width:'100%',backgroundColor:'#644D5C',border:'3px solid white'}}>
                <div class="content">
                    <div class="header text-white">{degree}</div>
                    <div class="meta mb-2 text-white">{time}</div>
                    <div class="description text-white" style={{textAlign:'justify'}}>
                        {description}
                    </div>
                </div>
            </div>
        </div>
    </div>
     );
}
 
export default Item;