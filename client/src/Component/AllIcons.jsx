import LinkedIcon from './LinkedIcon';

const AllIcons = () => {
    return ( 
        <div className='ui horizontal list mb-2'>
            <LinkedIcon 
                name='facebook'
                link='https://www.facebook.com/rupam.sahriar.7'
            />
            <LinkedIcon 
                name='github'
                link='https://github.com/rupam71'
            />
            <LinkedIcon 
                name='twitter'
                link='https://twitter.com/rupam_sahriar'
            />
            <LinkedIcon 
                name='linkedin'
                link='https://www.linkedin.com/in/rupam71/'
            />
            <LinkedIcon 
                name='instagram'
                link='https://www.instagram.com/rupam.sahriar/'
            />
        </div>
     );
}
 
export default AllIcons;