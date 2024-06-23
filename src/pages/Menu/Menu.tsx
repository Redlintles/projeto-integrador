import MenuHeader from "./MenuHeader";

import "./Menu.css";
export default function Menu() {
  return (
    <>
      <div className="menu">
        <MenuHeader />
        <section className="menu__body">
          <article className="menu__banner" id="menu-banner-1">
            <div className="menu-banner__leading">
              <h2 className="menu-banner__title">Visualize a sua equipe</h2>
              <div className="menu-banner__img" id="menu-img-1"></div>
            </div>
            <p className="menu-banner__text">
              De forma dinâmica e prática, o Escalizoom te auxilia na
              organização da sua equipe.
            </p>
          </article>
          <article className="menu__banner" id="menu-banner-2">
            <div className="menu-banner__leading">
              <h2 className="menu-banner__title">Não usa o Escalizoom?</h2>
              <div className="menu-banner__img" id="menu-img-2"></div>
            </div>
            <p className="menu-banner__text">
              Ideal para equipes rotativas. Crie a sua conta e comece a
              organizar as susas escalas como um rodízio.
            </p>
          </article>
          <article className="menu__banner" id="menu-banner-3">
            <div className="menu-banner__leading">
              <div className="menu-banner__img" id="menu-img-3"></div>
              <h2 className="menu-banner__title">
                Edite a sua equipe com facilidade
              </h2>
            </div>
            <p className="menu-banner__text">
              Os responsáveis pelas tarefas definidas em seu rodízio serão
              rapidamente notificados.
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
