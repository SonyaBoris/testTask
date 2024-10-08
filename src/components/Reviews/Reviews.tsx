import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewCard from '../ReviewCard/ReviewCard';
import { fetchComments, selectAllComments } from "../../features/commentSlice";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import "./reviews.css"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Reviews = () => {
  const dispatch = useAppDispatch();
  const comments = useAppSelector(selectAllComments);
  const commentStatus = useAppSelector((state) => state.comments.status);

  useEffect(() => {
    if (commentStatus === 'idle') {
      dispatch(fetchComments());
    }
  }, [commentStatus, dispatch]);

  return (
    <section className="reviews">
      <div className="container">
        <h2 className="title">Отзывы</h2>
        <div className="swiper__container">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={40}
            slidesPerView={3}
            navigation={{
              nextEl: '.swiper-button-left',
              prevEl: '.swiper-button-right',
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              10: {
                slidesPerView: 1,
              },
              700: {
                slidesPerView: 2,
                navigation: false,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {
              comments.map(user =>
                <SwiperSlide key={user.id}>
                  <ReviewCard user={user} />
                </SwiperSlide>
              )
            }
          </Swiper>
          <div className="swiper-button-left">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.839 2.27597C24.0818 2.0245 24.2162 1.6877 24.2132 1.3381C24.2102 0.988509 24.0699 0.654093 23.8227 0.406882C23.5755 0.159671 23.2411 0.0194457 22.8915 0.0164078C22.5419 0.0133699 22.2051 0.147762 21.9536 0.39064L11.0576 11.2866C9.80782 12.5368 9.10571 14.2322 9.10571 16C9.10571 17.7677 9.80782 19.4631 11.0576 20.7133L21.9536 31.6093C22.2051 31.8522 22.5419 31.9866 22.8915 31.9835C23.2411 31.9805 23.5755 31.8403 23.8227 31.5931C24.0699 31.3459 24.2102 31.0114 24.2132 30.6618C24.2162 30.3122 24.0818 29.9754 23.839 29.724L12.943 18.828C12.1931 18.0779 11.7718 17.0606 11.7718 16C11.7718 14.9393 12.1931 13.9221 12.943 13.172L23.839 2.27597Z" fill="#C2C8CD" />
            </svg>
          </div>
          <div className="swiper-button-right">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_0_935)">
                <path d="M8.39066 29.724C8.26332 29.847 8.16174 29.9941 8.09186 30.1568C8.02198 30.3194 7.9852 30.4944 7.98366 30.6714C7.98212 30.8485 8.01586 31.024 8.0829 31.1879C8.14994 31.3518 8.24895 31.5006 8.37414 31.6258C8.49933 31.751 8.6482 31.85 8.81206 31.9171C8.97592 31.9841 9.15149 32.0178 9.32853 32.0163C9.50557 32.0148 9.68053 31.978 9.8432 31.9081C10.0059 31.8382 10.153 31.7367 10.276 31.6093L21.172 20.7133C22.4202 19.4623 23.1212 17.7672 23.1212 16C23.1212 14.2328 22.4202 12.5377 21.172 11.2866L10.276 0.39064C10.0245 0.147762 9.68772 0.0133699 9.33813 0.0164078C8.98853 0.0194457 8.65412 0.159671 8.4069 0.406882C8.15969 0.654093 8.01947 0.988509 8.01643 1.3381C8.01339 1.6877 8.14779 2.0245 8.39066 2.27597L19.2867 13.172C20.0365 13.9221 20.4578 14.9393 20.4578 16C20.4578 17.0606 20.0365 18.0779 19.2867 18.828L8.39066 29.724Z" fill="#C2C8CD" />
              </g>
              <defs>
                <clipPath id="clip0_0_935">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;