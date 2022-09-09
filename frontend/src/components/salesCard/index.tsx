import { NotifyButton } from "../notifyButton";
import { InputDate } from "../InputDate";
import "./styles.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../utils/request";
import { Sale } from "../../models/sale";

export const SalesCard: React.FC = () => {
  const min = new Date(new Date().setDate(new Date().getDate() - 365));
  const max = new Date();

  const [minDate, setMinDate] = useState(min);
  const [maxDate, setMaxDate] = useState(max);

  const [sales, setSales] = useState<Sale[]>([]);

  useEffect(() => {
    const dateMin = minDate.toISOString().slice(0, 10);
    const dateMax = maxDate.toISOString().slice(0, 10);

    axios
      .get(`${BASE_URL}/sales?minDate=${dateMin}&maxDate=${dateMax}`)
      .then((res) => setSales(res.data.content));
  }, [minDate, maxDate]);

  return (
    <div className="dsmeta-card">
      <h2 className="dsmeta-sales-title">Vendas</h2>
      <div>
        <div className="dsmeta-form-control-container">
          <InputDate
            selected={minDate}
            onChange={(date: Date) => setMinDate(date)}
          />
        </div>
        <div className="dsmeta-form-control-container">
          <InputDate
            selected={maxDate}
            onChange={(date: Date) => setMaxDate(date)}
          />
        </div>
      </div>

      <div>
        <table className="dsmeta-sales-table">
          <thead>
            <tr>
              <th className="show992">ID</th>
              <th className="show576">Data</th>
              <th>Vendedor</th>
              <th className="show992">Visitas</th>
              <th className="show992">Vendas</th>
              <th>Total</th>
              <th>Notificar</th>
            </tr>
          </thead>
          <tbody>
            {sales.map((item) => (
              <tr key={item.id}>
                <td className="show992">{item.id}</td>
                <td className="show576">
                  {new Date(item.date).toLocaleDateString()}
                </td>
                <td>{item.sellerName}</td>
                <td className="show992">{item.visited}</td>
                <td className="show992">1{item.deals}</td>
                <td>{item.amount.toFixed(2)}</td>
                <td>
                  <div className="dsmeta-red-btn-container">
                    <NotifyButton saleId={item.id} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
