// import Url from './Url';

import LoveIcon from "./LoveIcon";

function renderUrl (url) {
    if(!url) {return <div></div>}
    return ( 
        <a href={url} style={{textDecoration:"none",color:'black'}}>
            <i class="computer icon"/>
           Visit
        </a> 
     );
}

const MyWorkItem = ({github,url,name,description}) => {
    return ( 
        <div className="sixteen wide mobile eight wide tablet eight wide computer eight wide large screen column">
            <div class="ui card" style={{margin:'auto',width:'80%'}}>
                <div class="content">
                    <LoveIcon />
                    <div class="header">{name}</div>
                    <div class="description">
                    <p style={{marginTop:'15px',textAlign:'justify'}}>{description}</p>
                    </div>
                </div>
                <div class="extra content">
                    <span class="left floated like">
                        <a href={github} style={{textDecoration:"none",color:'black'}}>
                            <i class="github icon"/>
                            Github
                        </a>
                    </span>
                    <span class="right floated star">
                        {/* <Url url={url} /> */}
                        {renderUrl(url)}
                    </span>
                </div>
                </div>
        </div>
     );
}
 
export default MyWorkItem;