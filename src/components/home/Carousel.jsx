import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import avatar from '../../assets/home/avatar.png';

const Carousel = () =>{
  return(
    <section className='text-center mt-24'> 
      <span className='text-primary text-base lg:text-base font-medium'> Happy Clients </span>
      <h2>Client's Say About Ud</h2>
      <Swiper
          loop={true}
          grabCursor={true}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
            600: {
              slidesPerView: 2,
            },
            400: {
              slidesPerView: 1,
            },
          }}
          className="mySwiper mt-24 px-4 py-60"
        >
          <SwiperSlide>
            <div
              className="flex flex-col justify-center  shadow-black  shadow-2xl rounded-lg
            p-8 mb-20"
            >
              <img src={avatar} alt="avatar" className="w-20 mx-auto" />
              <h3 className="font-semibold">Rob 1</h3>
              <p className="text-secondary text-base">Happy Client</p>
              <p className="text-light text-base leading-normal my-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos rem modi delectus accusantium alias. Eos iste deserunt cupiditate totam veniam!
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="flex flex-col justify-center shadow-black shadow-2xl rounded-lg
            p-8"
            >
              <img src={avatar} alt="avatar" className="w-20 mx-auto" />
              <h3 className="font-semibold">Rob 2</h3>
              <p className="text-secondary text-base">Happy Client</p>
              <p className="text-light text-base leading-normal my-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos rem modi delectus accusantium alias. Eos iste deserunt cupiditate totam veniam!
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="flex flex-col justify-center shadow-black shadow-2xl rounded-lg
            p-8"
            >
              <img src={avatar} alt="avatar" className="w-20 mx-auto" />
              <h3 className="font-semibold">Rob 3</h3>
              <p className="text-secondary text-base">Happy Client</p>
              <p className="text-light text-base leading-normal my-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos rem modi delectus accusantium alias. Eos iste deserunt cupiditate totam veniam!
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center  shadow-black  shadow-2xl rounded-lg p-8">
              <img src={avatar} alt="avatar" className="w-20 mx-auto" />
              <h3 className="font-semibold">Rob 4</h3>
              <p className="text-secondary text-base">Happy Client</p>
              <p className="text-light text-base leading-normal my-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos rem modi delectus accusantium alias. Eos iste deserunt cupiditate totam veniam!
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center  shadow-black  shadow-2xl rounded-lg p-8">
              <img src={avatar} alt="avatar" className="w-20 mx-auto" />
              <h3 className="font-semibold">Rob 5</h3>
              <p className="text-secondary text-base">Happy Client</p>
              <p className="text-light text-base leading-normal my-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos rem modi delectus accusantium alias. Eos iste deserunt cupiditate totam veniam!
              </p>
            </div>
          </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Carousel