import React from 'react';
import Header from '../components/Header';
import Searchs from '../components/Searchs';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

import '../assets/styles/App.scss';

const App = () => (
  <div className='App'>
    <Header />
    <Searchs />

    <Categories titleItem='Mi lista'>
      <Carousel>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </Carousel>
    </Categories>

    <Categories titleItem='Tendencias'>
      <Carousel>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </Carousel>
    </Categories>

    <Categories titleItem='Originales de Platzi Video'>
      <Carousel>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </Carousel>
    </Categories>

    <Footer />

  </div>
);

export default App;
