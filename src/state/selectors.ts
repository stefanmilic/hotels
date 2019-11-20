import { State } from './state';

import * as fromHotels from './hotels/selectors';

// hotels
export const getHotels = ({ hotels }: State) => fromHotels.getHotels(hotels);
