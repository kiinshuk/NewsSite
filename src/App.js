import React, { useState } from 'react';
import Navbar from './components/Navbar';
import NewsBoard from './components/NewsBoard';
import "./App.css"
import Footer from './components/Footer';

const App = () => {
  const [category, setCategory] = useState('general');


  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <div>
      <Navbar onCategoryChange={handleCategoryChange} />
      <NewsBoard category={category} />
      <Footer/>
    </div>
  );
}

export default App;