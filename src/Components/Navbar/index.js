import Button from '../Button';
import './navbar.css';

const navbar = () =>{

    return <div className="navbar">
        <img src='Group 10386.png' alt='its not present'  />
        <div className='inside'>
            <h4 style={{padding:'15px', fontWeight:'lighter'}}>Home</h4>
            <h4 style={{padding:'15px', fontWeight:'lighter'}}>Attorneys</h4>
            <h4 style={{padding:'15px', fontWeight:'lighter'}}>Practies Areas</h4>
            <h4 style={{padding:'15px',fontWeight:'lighter'}}>About Us</h4>
        </div>
        <Button/>
    
    </div>

}

export default navbar;