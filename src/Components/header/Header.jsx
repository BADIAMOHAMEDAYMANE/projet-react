import style from './Header.module.css'

function Header() {
  return (
    <header className={style.header}>
      <div className={style['logo-section']}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Iberia_Express.svg/1200px-Iberia_Express.svg.png"
          alt="Iberia Logo"
          className={style.logo}
        />
        <span>Iberia</span>
      </div>
      <nav className="nav">
        <a href="#" className={style['nav-link']}>
          Réserver
        </a>
        <a href="#" className={style['nav-link']}>
          Gestion de réservations
        </a>
        <a href="#" className={style['nav-link']}>
          Préparer votre voyage
        </a>
        <a href="#" className={style['nav-link']}>
          Iberia Plus
        </a>
      </nav>
    </header>
  );
}

export default Header;
