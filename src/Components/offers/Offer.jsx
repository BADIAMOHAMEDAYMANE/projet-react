import { useEffect } from "react";
import style from "./Offer.module.css";
import { useState } from "react";
import { getAllOffers } from "../../services/offerServices";


function MenuOffers() {

  const [offers,setOffers] = useState([])

  async function getOffers() {
    try {
      const offers = await getAllOffers()
      setOffers(offers)
    }catch(e) {
      alert(e)
    }

  }

  useEffect(() => {
      getOffers()
  },[])
  
  return offers.length === 0 ? (
    <p>Loading...</p>
  ) : (
    <div className={style["menu-offers"]}>
      {offers.map((offer, index) => (
        <Offer
          key={index}
          name={offer.name}
          url={offer.url}
          price={offer.price}
        />
      ))}
    </div>
  );
}

function Offer({name,url,price}) {
  return (
    <div className={style["offer-card"]}>
      <img src={url} alt={name} />
      <h3>{name}</h3>
      <span>{price}</span>
    </div>
  );
}

export default MenuOffers;
