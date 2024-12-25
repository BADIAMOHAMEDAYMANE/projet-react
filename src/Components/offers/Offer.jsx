import style from "./Offer.module.css";

const offers = [
    {
        name:"Voyage à Venice",
        url:"https://cdn.britannica.com/62/153462-050-3D4F41AF/Grand-Canal-Venice.jpg",
        price:673
    },
    {
        name:"Voyage à Genève",
        url:"https://img.lonelyplanet.fr/s3fs-public/styles/wide/public/2024-01/geneve_suisse.jpg.webp?itok=nxsX-Wuj",
        price:970
    },
    {
        name:"Voyage à Amsterdam",
        url:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/43/2c/43/les-maison-typiques-a.jpg?w=1200&h=1200&s=1",
        price:1200
    },
    {
        name:"Voyage à Londres",
        url:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/f5/de/london.jpg?w=1400&h=1400&s=1",
        price:5000  
    },
    {
        name:"Voyage à Tokyo",
        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiDoPAzpD-c3vn68GSPlkcFor6yohEiKd6Tg&s",
        price:5000 
    },
    {
        name:"Voyage à AL MADINA",
        url:"https://funci.org/wp-content/uploads/2015/06/madinah-al-munawara.jpg",
        price:9000
    },
    {
        name:"Voyage à Bangkok",
        url:"https://ik.imagekit.io/tvlk/blog/2024/06/shutterstock_2461072741.jpg",
        price:8000
    },
    {
        name:"Voyage à DOHA",
        url:"https://a.travel-assets.com/findyours-php/viewfinder/images/res70/482000/482003-Doha-And-Vicinity.jpg",
        price:20000
    }
]

function MenuOffers() {
  return (
    <div className={style["menu-offers"]}>
      {offers.map((offer,index) => (
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
