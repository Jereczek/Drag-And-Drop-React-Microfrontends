import ICarItem from '../models/ICarItem.type';

const cars: ICarItem[] = [
  {
    id: 100,
    imgUrl: 'https://pngimg.com/d/mercedes_PNG80189.png',
    quantity: 1,
    description: 'Mercedes S',

  },
  {
    id: 101,
    /* eslint-disable  max-len */
    imgUrl: 'https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_low/v1/editorial/vhs/bmw-x7.png',
    quantity: 1,
    description: 'BMW X7',
  },
  {
    id: 102,
    imgUrl: 'https://www.pngall.com/wp-content/uploads/2016/04/Porsche-Free-Download-PNG.png',
    quantity: 1,
    description: 'Porshe 911',
  },
  {
    id: 103,
    imgUrl: 'https://pngimg.com/d/audi_PNG1766.png',
    quantity: 1,
    description: 'Audi A7',
  },
];

export default cars;
