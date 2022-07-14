import React from 'react';
import {Navigation, Pagination, A11y, Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style/main.css';
import Nav from "../navigation/Nav";
import Search from "./Search";
import Header from "./Header";

const Main = () => {
    return (
      <>
          <Nav />
          <div className="header">
              <header>
                  <Swiper
                      modules={[Navigation, Pagination,A11y, Autoplay]}
                      spaceBetween={50}
                      slidesPerView={1}
                      navigation
                      pagination={{ clickable: true }}
                      loop={true}
                      autoplay={{delay: 2500}}
                  >
                      <SwiperSlide>
                          <Search />
                      </SwiperSlide>
                      <SwiperSlide>
                          <Search />
                      </SwiperSlide>
                      <SwiperSlide>
                          <Search />
                      </SwiperSlide>
                      <SwiperSlide>
                          <Search />
                      </SwiperSlide>
                  </Swiper>
              </header>
          </div>
          <Header />
      </>
    );
}
export default Main;