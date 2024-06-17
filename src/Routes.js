// routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from 'pages/main/Main';
import NotFoundPage from 'pages/notFoundPage/NotFoundPage';
import EmailSent from 'pages/emailSent/EmailSent';
import Training from 'pages/training/TrainingMain';
import Partnership from 'pages/partnership/PartnershipMain';
import Aadminlogin from 'pages/adminlogin/Aadminlogin';
import Career from 'pages/career/Career';
import FiberTraining from 'pages/training/fiberTraining/FiberTraining';
import TowerTraining from 'pages/training/towerTraining/TowerTraining';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Main />} />
      <Route path="/email-sent" exact element={<EmailSent />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/training" element={<Training />} />
      <Route path="/partnership" element={<Partnership />} />
      <Route path="/adminlogin" element={<Aadminlogin />} />
      <Route path="/career/:page?" element={<Career />} />
      <Route path="/fiber-training" element={<FiberTraining />} />
      <Route path="/tower-training" element={<TowerTraining />} />
    </Routes>
  );
};

export default AppRoutes;
