import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import SearchBar from './components/SearchBar';
import Cards from './components/Cards'
import TagsBar from './components/TagsBar';
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <Header />
      <Banner />
      <SearchBar />
      <Cards/>
      <TagsBar/>
      <Footer/>
    </div>
  );
}
