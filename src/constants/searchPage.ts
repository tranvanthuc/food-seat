import res1 from 'assets/images/search/res1.jpeg';
import res2 from 'assets/images/search/res2.jpeg';
import res3 from 'assets/images/search/res3.jpeg';
import res4 from 'assets/images/search/res4.jpeg';
import res5 from 'assets/images/search/res5.jpeg';

export type Table = {
  img: string;
  name: string;
  rating: number;
  reviewComment: string;
  reviews: number;
  type: string;
  place: string;
  available: boolean;
  times: Array<string>;
};

export const listTables: Table[] = [
  {
    img: res1,
    name: 'JW Cafe - JW Marriott Hotel Hanoi',
    rating: 4.5,
    reviewComment: 'Awesome',
    reviews: 58,
    type: 'International',
    place: 'Hanoi',
    available: true,
    times: ['1:30 PM', '1:45 PM', '2:00 PM', '2:15 PM', '2:30 PM', '2:45 PM'],
  },
  {
    img: res2,
    name: 'John Anthony - JW Marriott Hotel Hanoi',
    rating: 5,
    reviewComment: 'Exceptional',
    reviews: 69,
    type: 'Chinese (Canton)',
    place: 'HCM',
    available: true,
    times: ['5:30 PM', '5:45 PM', '6:00 PM', '6:15 PM', '6:30 PM', '6:45 PM'],
  },
  {
    img: res3,
    name: 'El Gaucho Argentinian Steakhouse - Ba Dinh',
    rating: 4.5,
    reviewComment: 'Good',
    reviews: 402,
    type: 'Steakhouse',
    place: 'Hanoi',
    available: true,
    times: ['4:30 PM', '4:45 PM', '5:00 PM'],
  },
  {
    img: res4,
    name: 'Akira Back - JW Marriott Hotel Hanoi',
    rating: 4,
    reviewComment: 'Awesome',
    reviews: 102,
    type: 'International',
    place: 'Danang',
    available: true,
    times: ['1:30 PM', '1:45 PM', '2:00 PM', '2:15 PM', '2:30 PM', '2:45 PM'],
  },
  {
    img: res5,
    name: 'Rice Bistro',
    rating: 5,
    reviewComment: 'Awesome',
    reviews: 200,
    type: 'International',
    place: 'Hanoi',
    available: true,
    times: ['3:30 PM', '3:45 PM'],
  },
];
