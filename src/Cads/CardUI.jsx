import React from 'react';
import './card-style.css';
const Card=props=>{
return(
   <div className="card.text-center shadow">
       <div className="overflow">
        <img src ={props.imgsrc} alt="Image1" className='card-img-top'/>
        </div>
        <div className="card-body text-dark">
            <h4 className="card-title">{props.title}</h4>
            <p className="card-text text-secondary">
                {props.text}
            </p>
            <div class="text-center">
            <a href="#" class="btn btn-outline-success">USE</a>
            </div>
        </div>
</div>
);
};

export default Card;