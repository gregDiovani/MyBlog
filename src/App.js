import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import HeroSection from './components/HeroSection';
import Techstack from './components/techstack';
import FeaturedArticle from './components/featuredArticle';
import Footer from './components/footer';

function App() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Techstack/>
    <FeaturedArticle/>
    <Footer/>
    </>
  );
}

export default App;
