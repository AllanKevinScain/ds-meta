import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";

export const InputDate: React.FC = () => {
  return (
    <DatePicker
      selected={new Date()}
      onChange={(date: Date) => {}}
      className="dsmeta-form-control"
      dateFormat="dd/MM/yyyy"
    />
  );
};
