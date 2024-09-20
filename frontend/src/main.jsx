import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import Layout from './Layout.jsx';
import Home from './components/home/Home.jsx';
import About from './components/about/About.jsx';
import Team from './components/team/Team.jsx';
import SCrollToTop from './utilities/ScrollToTo.jsx';
import TeamDetails from './components/team/TeamDetails.jsx';
import Career from './components/career/Career.jsx';
import Contact from './components/contact/Contact.jsx';
import Pricing from './components/pricing/Pricing.jsx';
import Faq from './components/faq/Faq.jsx';
import Service from './components/service/Service.jsx';
import SingleService from './components/service/singleservice/SingleService.jsx';
import PrivacyPolicy from './components/privacypolicy/PrivacyPolicy.jsx';
import Terms from './components/tems/Terms.jsx';
import Sitemap from './components/sitemap/Sitemap.jsx';
import Solutions from './components/solutions/Solutions.jsx';
import Verify from './components/verify/Verify.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Mern from './components/solutions/solutiondetails/Mern.jsx';
import Digital from './components/solutions/solutiondetails/Digital.jsx';
import Seo from './components/solutions/solutiondetails/Seo.jsx';
import App from './components/solutions/solutiondetails/App.jsx';
import Frontend from './components/solutions/solutiondetails/Frontend.jsx';
import Backend from './components/solutions/solutiondetails/Backend.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import Admin from './admin/Admin.jsx';
import Login from './components/login/Login.jsx';
import { AuthProvider } from './store/Auth.jsx';
import Dashboard from './admin/dashboard/Dashboard.jsx';
import Employes from './admin/employes/Employes.jsx';
import Intern from './admin/interns/Intern.jsx';
import Addemploye from './admin/addemploye/Addemploye.jsx';
import Addintern from './admin/addintern/Addintern.jsx';
import Logout from './components/Logout.jsx';
import UpdateEmployee from './admin/employes/UpdateEmploye.jsx';
import UpdateIntern from './admin/interns/UpdateIntern.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
    <Router>
    <SCrollToTop />
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="team" element={<Team/>} />
          <Route path="/team/:id" element={<TeamDetails />} />
          <Route path="career" element={<Career/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="pricing" element={<Pricing/>} />
          <Route path="faq" element={<Faq/>} />
          <Route path="services" element={<Service/>} />
          <Route path="/services/:id" element={<SingleService/>} />
          <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
          <Route path="/terms&conditions" element={<Terms/>} />
          <Route path="/sitemap" element={<Sitemap/>} />
          <Route path="/solutions" element={<Solutions/>} />
          <Route path="/verify" element={<Verify/>} />
          <Route path="/solution/mern" element={<Mern/>} />
          <Route path="/solution/digital" element={<Digital/>} />
          <Route path="/solution/seo" element={<Seo/>} />
          <Route path="/solution/App" element={<App/>} />
          <Route path="/solution/frontend" element={<Frontend/>} />
          <Route path="/solution/backend" element={<Backend/>} />
          <Route path="login" element={<Login/>} />
          {/* admin route starts here  */}
          <Route path="admin" element={<ProtectedRoute element={<Admin/>} />} >
          <Route index element={<Dashboard/>} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="employes" element={<Employes/>} />
          <Route path="intern" element={<Intern/>} />
          <Route path="add-interns" element={<Addintern/>} />
          <Route path="add-employes" element={<Addemploye/>} />
          <Route path='logout' element={<Logout/>} />
          </Route>
          {/* admin route ends here  */}
          <Route path="admin/employees/update/:id" element={<UpdateEmployee/>}/>
          <Route path="admin/interns/update/:id" element={<UpdateIntern/>}/>
        </Route>
      </Routes>
    </Router>
    <ToastContainer />
    </AuthProvider>
  </React.StrictMode>,
)
