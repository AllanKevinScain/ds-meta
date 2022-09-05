import IconUser from "../../assets/img/user.svg";
import "./styles.css";

export const NotifyButton: React.FC = () => {
  return (
    <div className="dsmeta-red-btn">
      <img src={IconUser} alt="Notificar" />
    </div>
  );
};
