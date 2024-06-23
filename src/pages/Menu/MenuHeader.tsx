import { CiSearch } from "react-icons/ci";
import Profile from "../../components/Profile/Profile";

import "./MenuHeader.css";

export default function MenuHeader() {
  return (
    <section className="menu__header">
      <ul className="header-list">
        <li className="header-list__item">
          <a href="#">Sobre nós</a>
        </li>
        <li className="header-list__item">
          <a href="#">Perguntas Frequentes</a>
        </li>
      </ul>
      <form action="" className="header__search-form">
        <div className="search-form__input">
          <CiSearch />
          <input type="text" name="query" placeholder="Pesquisar" />
        </div>
      </form>
      <Profile username={"AL"} bgColor="#f00" />
    </section>
  );
}
