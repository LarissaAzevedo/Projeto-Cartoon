import React from 'react';
import Header from '../components/header'
import Banner from '../components/banner'
// import Grid from '../components/grid';
import Footer from '../components/footer';

function Home() {
  return (
    <div className="home">
      <Header />
      <div className="container">
        <Banner />
        {/* <Grid /> */}
      </div>
      <Footer />
    </div>
  );
}

export default Home;