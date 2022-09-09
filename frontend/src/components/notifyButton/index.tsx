import axios from "axios";
import { toast } from "react-toastify";
import IconUser from "../../assets/img/user.svg";
import { BASE_URL } from "../../utils/request";
import "./styles.css";

export const NotifyButton: React.FC<{ saleId: number }> = ({ saleId }) => {
  const handleClick = (id: number) => {
    axios(`${BASE_URL}/sales/${id}/notification`).then((res) => {
      toast.info("SMS envido com sucesso!");
    });
  };

  return (
    <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
      <img src={IconUser} alt="Notificar" />
    </div>
  );
};
