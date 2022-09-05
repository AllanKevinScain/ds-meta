import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";

interface InputDateProps {
  selected: Date;
  onChange: (date: Date) => void;
}

export const InputDate: React.FC<InputDateProps> = ({ selected, onChange }) => {
  return (
    <DatePicker
      selected={selected}
      onChange={onChange}
      className="dsmeta-form-control"
      dateFormat="dd/MM/yyyy"
    />
  );
};
