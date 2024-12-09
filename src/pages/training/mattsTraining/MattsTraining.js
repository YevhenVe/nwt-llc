import React from 'react';
import Header from 'components/header/Header';
import Footer from 'components/footer/footer';
// import TrainingProgram from 'pages/training/mattsTraining/trainingProgram/TrainingProgram';
import TrainingContactForm from 'pages/training/mattsTraining/trainingContacts/TrainingContactForm';
// import TrainingVideo from './trainingVideo/TrainingVideo';

const MattsTraining = () => {
  return (
    <>
      <Header />
      <TrainingContactForm />
      {/* <TrainingVideo videoId={'m__sz-FkFj0?si=9_8VxJbjXb4sf_Kl'} /> */}
      {/* <TrainingProgram /> */}
      <Footer />
    </>
  );
};

export default MattsTraining;
