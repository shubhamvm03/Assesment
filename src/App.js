import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import JobListing from './components/JobListing/JobListing'
import JobCard from './components/JobCard/JobCard';
import RemoteJobs from './components/RemoteJobs/RemoteJobs';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <JobListing/>
    
    <RemoteJobs/>
    <Footer/>
    

    </>
  );
}

export default App;
