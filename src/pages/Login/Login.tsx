import { IoMailOutline, IoLockClosedOutline } from "react-icons/io5";
import "./Login.css";
export default function Login() {
  return (
    <>
      <div className="login">
        <div className="login__left">
          <div className="login__img"></div>
        </div>
        <div className="login__right">
          <form action="" className="login__form">
            <h3>Login</h3>
            <label className="login__label">
              <span>Usuário</span>
              <div className="login__input">
                <IoMailOutline />
                <input
                  type="text"
                  name="username"
                  placeholder="Digite seu e-mail"
                />
              </div>
            </label>
            <label className="login__label">
              <span>Senha</span>
              <div className="login__input">
                <IoLockClosedOutline />
                <input
                  type="password"
                  name="password"
                  placeholder="Digite sua senha"
                />
              </div>
            </label>
            <button className="login__btn" type="submit">
              Entrar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
