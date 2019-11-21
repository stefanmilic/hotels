import React, { useEffect } from 'react';
import { block } from 'bem-cn';
import { format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fetchHotelComments } from '../state/hotelComments/actionCreators';
import { fetchHotelImages } from '../state/hotelImages/actionCreators';
import Slider from 'react-slick';
import { faStar } from '@fortawesome/free-solid-svg-icons';
// import Image from '../assets/images/tram.png';
import Loader from 'react-loader-spinner';
import CommentForm from './CommentForm';
import CommentsList from './CommentsList';
import { connect } from 'react-redux';
import { State } from 'src/state/state';
import {
  getHotelComments,
  isHotelCommentsLoading,
  getHotelImages,
  isHotelImagesLoading,
} from 'src/state/selectors';
import { Hotel, HotelImages, HotelComments } from 'src/types/hotel';

const b = block('hotel-card');

const settings = {
  dots: false,
  infinite: true,
  arrows: false,
  speed: 700,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};

interface HotelCardProps extends Hotel {
  hotelComments: HotelComments[];
  hotelImages: HotelImages[];
  commentLoading: boolean;
  imagesLoading: boolean;
  fetchHotelImages: (id: string) => void;
  fetchHotelComments: (id: string) => void;
}

const HotelCard: React.FC<HotelCardProps> = ({
  id,
  name,
  price,
  stars,
  description,
  date_created,
  country,
  city,
  fetchHotelComments,
  hotelComments,
  commentLoading,
  fetchHotelImages,
  hotelImages,
  imagesLoading,
}) => {
  const [setActive, setActiveState] = React.useState(false);

  useEffect(() => {
    fetchHotelImages(id);
  }, [id, fetchHotelImages]);

  const toggleAccordion = () => {
    setActiveState(!setActive);
    // avoiding sent request everytime when click button
    !hotelComments.find(item => {
      return Object.values(item).includes(id);
    }) &&
      !setActive &&
      fetchHotelComments(id);
  };

  const renderImages = () => {
    return (
      hotelImages &&
      hotelImages[id] &&
      hotelImages[id].images.map((image: string, i: number) => (
        // set uniqe id
        <img key={i} src={image} alt='' />
      ))
    );
  };

  const date = new Date(date_created);

  return (
    <div className={b()}>
      <div className={b('header')}>
        {imagesLoading && (
          <Loader
            type='ThreeDots'
            color='gray'
            className={String(b('image-loader'))}
            height={70}
            width={70}
          />
        )}
        <Slider {...settings} className={String(b('slider'))}>
          {renderImages()}
        </Slider>
        <div className={b('hotel-wrapper')}>
          <div className={b('hotel-info')}>
            <div className={b('name-wrapper')}>
              <h3 className={b('hotel-name')}>{name}</h3>
              <div className={b('hotel-stars')}>
                {[...Array(Number(stars))].map((_, i) => (
                  <FontAwesomeIcon
                    key={i}
                    className={String('star')}
                    icon={faStar}
                    size='1x'
                  />
                ))}
              </div>
            </div>
            <p className={b('username')}>
              {city}, {country}, {price}$
            </p>
            <p className={b('description')}>{description}</p>
          </div>
          <div className={b('date-wrapper')}>
            <button onClick={toggleAccordion} className={b('show-btn')}>
              {setActive ? 'Hide reviews' : 'Show reviews'}
            </button>
            <div>{format(date, 'dd.MM.yyyy')}</div>
          </div>
        </div>
      </div>
      <div
        className={b('body', { state: setActive ? 'expanded' : 'collapsed' })}
      >
        <CommentForm hotelId={id} />
        <h3>List of comments</h3>
        {commentLoading && (
          <Loader
            type='ThreeDots'
            color='gray'
            className={String(b('loader'))}
            height={100}
            width={100}
          />
        )}
        {!commentLoading &&
          hotelComments.map(comment => (
            <CommentsList
              key={comment.id}
              fullName={comment.fullName}
              comment={comment.comment}
            />
          ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state: State) => ({
  hotelComments: getHotelComments(state),
  commentLoading: isHotelCommentsLoading(state),
  hotelImages: getHotelImages(state),
  imagesLoading: isHotelImagesLoading(state),
});

export default connect(mapStateToProps, {
  fetchHotelComments,
  fetchHotelImages,
})(HotelCard);
