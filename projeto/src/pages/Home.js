import React from 'react';
import Header from '../components/header'
import Banner from '../components/banner'
import Grid from '../components/grid';
import Footer from '../components/footer';

function Home() {
    return (
      <div className="home">
          <Header />
          <Banner foto={"foto sei la"}/>
          <Grid/>

          
          <Footer />
      </div>
  );

}

export default Home;