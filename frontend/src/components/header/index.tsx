import LogoIMG from "../../assets/img/logo.svg";
import "./styles.css";

export const Header: React.FC = () => {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={LogoIMG} alt="DSMeta" />
        <h1>DSMeta</h1>
        <p>
          Desenvolvido por
          <a href="https://www.instagram.com/devsuperior.ig">@devsuperior.ig</a>
        </p>
      </div>
    </header>
  );
};
