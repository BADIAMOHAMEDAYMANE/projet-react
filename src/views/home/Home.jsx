import Carousel from "../../components/carousel/Carousel";
import Destination from "../../components/destination/Destination";
import MenuOffers from "../../components/offers/Offer";
import PromoSection from "../../components/promoSection/PromoSection";
import style from "./Home.module.css";

const Home = () => {
    return (
      <>
        <Carousel />
        <div className={style.destination}>
          <Destination />
        </div>
        <PromoSection />
        <section className={style["menu-offers"]}>
          <h2>Nos Meilleures Offres</h2>
          <MenuOffers />
        </section>
      </>
    );
  };
  
  export default Home;