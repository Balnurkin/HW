import BestSellerItems from "./components/BestSellerItems/BestSellerItems";
import DealOfTheWeek from "./components/DealOfTheWeek/DealOfTheWeek";
import HeaderContent from "./components/HeaderContent/HeaderContent";
import HeaderNavbar from "./components/HeaderNavbar/HeaderNavbar";
import TreandingCategories from "./components/TreandingCategories/TreandingCategories";
import Drille from "./components/Drille/Drille";
import './global.css'
import CopyRight from "./components/CopyRight/CopyRight";

function App() {
  return (
    <>
      <HeaderNavbar />
      <HeaderContent />
      <BestSellerItems />
      <DealOfTheWeek />
      <TreandingCategories />
      <Drille/>
      <CopyRight />
    </>
  )
}

export default App;
