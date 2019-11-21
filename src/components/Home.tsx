import React, { useEffect } from 'react';
import HotelCard from './HotelCard';
import { block } from 'bem-cn';
import { connect } from 'react-redux';
import { fetchHotels } from '../state/hotels/actionCreators';
import { getHotels } from 'src/state/selectors';
import { State } from 'src/state/state';
import { Hotel } from 'src/types/hotel';

const b = block('home');

interface HomeProps {
  hotels: Hotel[];
  fetchHotels: () => void;
}

const Home: React.FC<HomeProps> = ({ hotels, fetchHotels }) => {
  useEffect(() => {
    fetchHotels();
  }, [fetchHotels]);

  if (hotels.length === 0) {
    return null;
  }

  return (
    <div className={b()}>
      {hotels.map(item => {
        return <HotelCard key={item.id} {...item} />;
      })}
    </div>
  );
};

const mapStateToProps = (state: State) => {
  return {
    hotels: getHotels(state),
  };
};

export default connect(mapStateToProps, { fetchHotels })(Home);
