import React from 'react';
import Courses from '../Courses/Courses';
import Feedback from '../Feedback/Feedback';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Sponser from '../Sponser/Sponser';
import WorkExamples from '../WorkExamples/WorkExamples';

const Home = () => {
    return (
      <>
      <Header/>
      <Sponser/>
      <Courses/>
      <WorkExamples/>
      <Feedback/>
      <Footer/>
      </>
    );
};

export default Home;