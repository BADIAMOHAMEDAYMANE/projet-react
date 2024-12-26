import style from "./Footer.module.css";

function Footer() {
  const sponsors = [
    {
      name: "Sponsor 1",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzIiLFEbgzVaCzd6RFPjkDjATmGtovPS7vJw&s",
      url: "https://www.hugoboss.com/fr/home?srsltid=AfmBOoq17z7t0AlmnwKN-Wdp37sMH8D_Oxk8QORahYIWCpZDa5NQozv1",
    },
    {
      name: "Sponsor 2",
      logo: "https://i.pinimg.com/originals/2f/9a/98/2f9a988eba3ea6f7be964e16ff5f8a86.png",
      url: "https://www.adidas.fr/blog/967644-les-logos-adidas-histoire-et-signification",
    },
    {
      name: "Sponsor 3",
      logo: "https://w7.pngwing.com/pngs/335/237/png-transparent-zara-hd-logo.png",
      url: "https://www.zara.com/ma/",
    },
  ];
  const socialMedia = [
    {
      name: "Instagram",
      logo: "https://img.freepik.com/vecteurs-premium/logo-colore-pour-camera-fond-transparent_975374-5278.jpg",
      url: "https://www.instagram.com/iberia/",
    },
    {
      name: "Linkedin",
      logo: "https://image.similarpng.com/very-thumbnail/2020/07/Linkedin-logo-on-transparent-PNG-.png",
      url: "https://www.linkedin.com/company/iberia/",
    },
    {
      name: "Instagram",
      logo: "https://img.freepik.com/psd-premium/icone-medias-sociaux-facebook-3d_466778-4384.jpg?semt=ais_hybrid",
      url: "https://web.facebook.com/iberia",
    },
  ];

  return (
    <footer className={style.footer}>
      <div className={style["footer-content"]}>
        <div className={style.sponsors}>
          <div className={style["sponsor-list"]}>
            {sponsors.map((sponsor, index) => (
              <a
                key={index}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className={style["sponsor-link"]}
              >
                <img
                  src={sponsor.logo}
                  alt={`Logo de ${sponsor.name}`}
                  className={style["sponsor-logo"]}
                />
              </a>
            ))}
          </div>
          <div className={style["social-media"]}>
            {socialMedia.map((media, index) => (
              <a
                key={index}
                href={media.url}
                target="_blank"
                rel="noopener noreferrer"
                className={style["sponsor-link"]}
              >
                <img
                  src={media.logo}
                  alt={`Logo de ${media.name}`}
                  className={style["sponsor-logo"]}
                />
              </a>
            ))}
          </div>
        </div>
        <p className={style.copyright}>© 2024 Iberia - Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;
