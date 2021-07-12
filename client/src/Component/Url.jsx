const Url = ({url}) => {
    if(!url) {return <div></div>}
    return ( 
        <a href={url} style={{textDecoration:"none",color:'black'}}>
                            <i class="computer icon"/>
                            Visit
                        </a> 
     );
}
 
export default Url;