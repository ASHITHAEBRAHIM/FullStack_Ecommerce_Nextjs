import { Outlet } from "react-router-dom"
import Background from "../components/Background"
import Header from "../components/Header"
import Product from "../components/Product"
import Review from "../components/Review"
import Footer from "../components/Footer"
const Home = () => {
  return (
    <div>
      <Header/>
      <Background/>
      <Product/>
      <Review/>
      <Footer/>
    </div>
  )
}

export default Home