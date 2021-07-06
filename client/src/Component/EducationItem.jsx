const EducationItem = ({degree,time,description}) => {
    return ( 
    <div className="thirteen wide mobile seven wide tablet seven wide computer seven wide large screen column">
        <div className="ui cards mx-2 mt-2">
            <div class="card" style={{width:'100%'}}>
                <div class="content">
                    <div class="header">{degree}</div>
                    <div class="meta mb-2">{time}</div>
                    <div class="description" style={{textAlign:'justify'}}>
                        {description}
                    </div>
                </div>
            </div>
        </div>
    </div>
     );
}
 
export default EducationItem;