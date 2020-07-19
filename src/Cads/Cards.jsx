import React,{Component} from 'react';
import Card from './CardUI';
import img1 from '../assets/im1.jpg';
import img2 from '../assets/im2.jpg';
import img3 from '../assets/im3.jpg';
class Cards extends Component{
    render(){
    return(
        <div className='container-fluid.d-flex.justify-content-center'> 
        <div className='row'>
       <div className='col-md-4'>
       <Card imgsrc={img1} title="HARD-WORKER" text="100 points"/>
       </div>
      <div className='col-md-4'>
       <Card imgsrc={img2}title="LEADERSHIP" text="120 points"/>
        </div>
       <div className='col-md-4'> 
       <Card imgsrc={img3}title="TEAM-PLAYER" text="80 points"/>
       </div> 
       </div>
       </div>

    );
}
    
}
export default Cards;
