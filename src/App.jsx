import style from "./App.module.css";
import Carousel from "./Components/carousel/Carousel";
import Destination from "./Components/destination/Destination";
import Footer from "./Components/footer/Footer";
import Header from "./Components/header/Header";
import PromoSection from "./Components/promoSection/PromoSection";
import MenuOffers from "./Components/offers/Offer"; // Assurez-vous du bon chemin

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
        {/* Ajouter la section MenuOffers */}
        <section className={style["menu-offers"]}>
          <h2>Nos Meilleures Offres</h2>
          <MenuOffers />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
