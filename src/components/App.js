import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import PhotoAlbum from './photos/PhotoAlbum';
import cat1 from '../assets/calico.jpg';
import cat2 from '../assets/fatGreyTabby.jpg';
import cat3 from '../assets/nebelung.jpg';

export default function App() {
  const photos = [
    cat1,
    cat2,
    cat3
  ];

  return (
    <>
      <Header />
      <PhotoAlbum title="Cats" photos={photos} />
      <Footer />
    </>
  );
}
