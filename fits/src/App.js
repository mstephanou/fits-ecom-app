import './components/directory/directory';

import CategoryItem from './components/category-item/category-item';
import Directory from './components/directory/directory';

const App = () => {
  const categories = [
    {
      id: 1,
      title: 'Headwear',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    },
    {
      id: 2,
      title: 'Outerwear',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    },
    {
      id: 3,
      title: 'Footwear',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    },
    {
      id: 4,
      title: 'Womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    },
    {
      id: 5,
      title: 'Mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    },
  ];

  // data above is mapped below, saves having to write multiple divs, cleaner code!

  return <Directory categories={categories} />;
};

export default App;
