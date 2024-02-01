import React from "react";

function Carousel({title,items}) {
  
  return (
    <div className="my-10">
      <div className='text-center text-5xl mb-8'>{title}</div>
      <div className="carousel carousel-end rounded-box">
        {items.map(each=>{
          return <div className="carousel-item">
          <img src={each.image} alt="Drink" className="w-100 h-[200px]" />
        </div> })}
      </div>
    </div>
  );
}

export default Carousel;
