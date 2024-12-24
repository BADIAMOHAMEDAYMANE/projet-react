import style from "./App.module.css";
import Carousel from "./Components/carousel/Carousel";
import Destination from "./Components/destination/Destination";
import Footer from "./Components/footer/Footer";
import Header from "./Components/header/Header";
import PromoSection from "./Components/promoSection/PromoSection";
function App() {
  return (
    <div>
      <Header />
      <main className={style["main-content"]}>
        <Carousel />
        <div className={style.destination}>
          <Destination />
        </div>
        <PromoSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
