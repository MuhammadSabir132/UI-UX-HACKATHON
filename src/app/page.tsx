import BlueHeader from "./components/header-blue";
import Carausel from "./components/coursole";
import Editors from "./components/editor";
import Footer from "./components/footer";
import GreenDiv from "./components/div-green";
import Lastdiv from "./components/div-last";
import Navbar from "./components/navbar";
import ProductCard from "./components/cards-product";
import Whitediv from "./components/dic";

export default function Home(){
  return(
    <div>
      <BlueHeader/>
      <Navbar/>
      <Carausel/>
      <Editors/>
      <ProductCard/>
      <GreenDiv/>
      <Whitediv/>
      <Lastdiv/>
      <Footer/>
           
    </div>
  )
}