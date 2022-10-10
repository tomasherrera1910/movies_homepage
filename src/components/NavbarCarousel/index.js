import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "./carouselStyles.css"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay, A11y } from "swiper"
import CarouselCard from "./CarouselCard"
import { useCarousel } from "../../hooks/useCarousel"
import styles from "./newMoviesSlider.module.css"
const { header, swiperContainer } = styles
export default function NavbarCarousel() {
  const { upcomingMovies } = useCarousel()
  return (
    <header className={header}>
      {!upcomingMovies.length ? (
        <section
          style={{ backgroundColor: "#000", width: "100%", height: "100%" }}
        ></section>
      ) : (
        <Swiper
          modules={[Pagination, Navigation, Autoplay, A11y]}
          direction="vertical"
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          allowTouchMove
          loop
          autoplay={{
            delay: 7000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          style={{ width: "100%", height: "100%" }}
        >
          {upcomingMovies.map((movie) => (
            <SwiperSlide
              key={movie.id}
              className={swiperContainer}
              style={{ backgroundImage: movie.backgroundImage }}
            >
              <CarouselCard movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </header>
  )
}
