import * as React from 'react';
import { block } from 'bem-cn';
import { format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Slider from 'react-slick';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Image from '../assets/images/tram.png';
import CommentForm from './CommentForm';
import CommentsList from './CommentsList';

const b = block('accordion-card');

const settings = {
  dots: false,
  infinite: true,
  arrows: false,
  speed: 700,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const AccordionCard: React.FC<any> = ({
  id,
  name,
  price,
  stars,
  description,
  date_created,
  country,
  city,
}) => {
  const [setActive, setActiveState] = React.useState(false);
  function toggleAccordion() {
    setActiveState(!setActive);
  }

  const date = new Date(date_created);

  return (
    <div className={b()}>
      <div className={b('header')}>
        <Slider {...settings} className={String(b('slider'))}>
          <img src={Image} className={b('image')} />
          <img src={Image} className={b('image')} />
        </Slider>
        <div className={b('hotel-wrapper')}>
          <div className={b('hotel-info')}>
            <div className={b('name-wrapper')}>
              <h3 className={b('hotel-name')}>{name}</h3>
              <div className={b('hotel-stars')}>
                <FontAwesomeIcon
                  className={String('star')}
                  icon={faStar}
                  size='1x'
                />{' '}
              </div>
            </div>
            <p className={b('username')}>
              {' '}
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
        <CommentForm />

        <h3>List of comments</h3>
        <CommentsList />
        <CommentsList />
        <CommentsList />
      </div>
    </div>
  );
};

export default AccordionCard;
