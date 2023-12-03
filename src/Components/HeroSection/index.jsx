import './herosection.css';

export default () => {
    return <div className="hs-container">
             <div>
             <div className='about' style={{fontSize:'30px'}}>
                <h2 style={{fontWeight:'450'}}>you don't have to</h2>
                <h2 style={{fontWeight:'650', paddingTop:'-50px'}}>Fight them Alone.</h2>
             </div>
             <p className='text'>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, 
               curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget,
               hac massa gravida arcu interdum proin curae.</p>

               <img src='Group 11.png' style={{paddingLeft:'52px'}}/>
             </div>
             <div className="hs-img-frame">
                <img  src='Group 10591.png' style={{
                  height:'100%',
                  width:'100%'
                }}/>
             </div>
    </div>
}