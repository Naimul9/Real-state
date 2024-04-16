

const Slider = () => {
    return (
        <div className="max-w-screen-2xl mx-auto mt-10 ">
         <div className="carousel rounded-2xl   ">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/s5JsXC2/pexels-expect-best-323780.jpg" className="w-full h-[600px]" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/K2tKRqd/pexels-binyamin-mellish-1396122.jpg" className="w-full h-[600px]" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/tLYGKYC/pexels-kyla-rose-rockola-816198.jpg" className="w-full h-[600px]" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full"> 
          <img src="https://i.ibb.co/LZqFC5P/pexels-pixabay-276554.jpg" className="w-full h-[600px]" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
       </div>
    );
};

export default Slider;