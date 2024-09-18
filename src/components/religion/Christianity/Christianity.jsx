import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Christianity.css';  // File CSS của bạn

import image1 from '../../../assets/images/christianitylogo.png';
import image2 from '../../../assets/images/christianitylogo1.png';
import image3 from '../../../assets/images/christianitylogo2.png';

const ImageCarousel = () => {
  const sliderRef = useRef(null);

  const settings = {
    centerMode: true,            // Cho phép ảnh ở giữa lớn hơn
    centerPadding: '0px',        // Khoảng trống giữa các ảnh
    dots: true,                  // Hiển thị dấu chấm điều hướng
    infinite: true,              // Cho phép lặp lại slider vô hạn
    speed: 500,                  // Tốc độ chuyển slide
    slidesToShow: 3,             // Hiển thị 3 ảnh cùng lúc
    slidesToScroll: 1,           // Di chuyển 1 ảnh mỗi lần scroll
    autoplay: true,              // Tự động chạy slide
    autoplaySpeed: 3000,         // Tốc độ chuyển tự động
    initialSlide: 1,             // Bắt đầu từ ảnh thứ 2 (để ảnh này phóng to)
    focusOnSelect: true,         // Khi click vào ảnh sẽ tự động di chuyển ảnh đó vào giữa
    arrows: false,               // Ẩn mũi tên điều hướng mặc định
  };

  return (
    <div className="carousel-container">
      <h2>Christianity</h2>
      <p>The Historical Formation and Development, Foundational Beliefs, and Widespread Global Influence</p>

      <Slider ref={sliderRef} {...settings}>
        <div className="carousel-slide">
          <img src={image1} alt="Thập giá trong bình minh" />
        </div>
        <div className="carousel-slide">
          <img src={image2} alt="Người đàn ông cầu nguyện với chuỗi tràng hạt" />
        </div>
        <div className="carousel-slide">
          <img src={image3} alt="Người cầu nguyện trong nhà thờ Hồi giáo" />
        </div>
      </Slider>

      {/* Nút chuyển slide ở giữa phía dưới */}
      <div className="carousel-navigation">
        <button className="prev-slide" onClick={() => sliderRef.current.slickPrev()}>
          {"<"}
        </button>
        <button className="next-slide" onClick={() => sliderRef.current.slickNext()}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
