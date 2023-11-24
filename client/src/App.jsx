import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

import Header from './components/Header';
import Sidebar from './components/Side';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
// Dashboard
import Summary from './pages/Summary';
import Monitor from './pages/Monitor';
import MedicalHistories from './pages/MedicalHistories';
import RiskFactor from './pages/RiskFactor';
import RiskPrediction from './pages/RiskPrediction';
import DetectionHistories from './pages/DetectionHistories';
import Treatment from './pages/Treatment';
import Recommendation from './pages/Recommendation';
// Private Route
import PrivateRoute from './components/PrivateRoute'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/about' element={<About />} />
        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/ringkasan-pasien' element={<Summary />} />
          <Route path='/monitor' element={<Monitor />} />
          <Route path='/riwayat-medis' element={<MedicalHistories />} />
          <Route path='/faktor-resiko' element={<RiskFactor />} />
          <Route path='/prediksi-faktor' element={<RiskPrediction />} />
          <Route path='/riwayat-deteksi' element={<DetectionHistories />} />
          <Route path='/treatment' element={<Treatment />} />
          <Route path='/rekomendasi' element={<Recommendation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
