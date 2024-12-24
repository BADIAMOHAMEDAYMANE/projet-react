import style from './PromoSection.module.css'

function PromoSection() {
  return (
    <div className={style['promo-section']}>
      <h1 className={style['promo-title']}>{"Faites des économies sur vos voyages d'affaires"}</h1>
      <p className={style['promo-text']}>Adhérez au programme On Business et profitez de réductions directes sur vos vols</p>
      <button className={style['promo-button']}>Inscrivez-vous</button>
    </div>
  );
}

export default PromoSection;
