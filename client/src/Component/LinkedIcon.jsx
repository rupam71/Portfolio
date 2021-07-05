const LinkedIcon = ({name,link}) => {
    return ( 
        <div className='item'>
            <a className="text-white" style={{textDecoration:'none'}}
            href={link}>
                <i className={`big ${name} link icon`}></i>
            </a>
        </div>
     );
}
 
export default LinkedIcon;