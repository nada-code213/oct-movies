export default function SwiperCard() {
  return (
    <div className="movie-card">
      <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
      <div className="swiper-slide-content">
        <div className="left">
          <div className="header">
            <h2>Title</h2>
            <p>Genre</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            laudantium, ipsum quod pariatur nostrum numquam!
          </p>
        </div>
        <div className="right">
          <input type="button" value="See More" />
        </div>
      </div>
    </div>
  );
}
