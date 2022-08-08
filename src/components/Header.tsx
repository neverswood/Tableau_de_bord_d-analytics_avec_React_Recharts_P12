import logo from '../assets/logo.png';
import '../styles/Header.scss';

export function Header() {
  return (
    <header>
      <img src={logo} alt="logo"></img>
      <nav>
        <a href="/#">Accueil</a>
        <a href="/#">Profil</a>
        <a href="/#">Réglage</a>
        <a href="/#">Communauté</a>
      </nav>
    </header>
  );
}
