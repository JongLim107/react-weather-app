import dayjs from "dayjs";
import "./styles.css";

const ForecastItem = ({ label, value }) => {
  return (
    <div className="row">
      <div className="col-sm-5">
        <label>{label}</label>
      </div>
      <div className="col-sm-7">
        <strong>{value}</strong>
      </div>
    </div>
  );
};

const ForecastView = ({ data }) => {
  return (
    <div className="ForecastView">
      <label>{data.city}, {data.country}</label>
      <h1 className="fw-bold">{data.main}</h1>

      <ForecastItem label="Description:" value={data.description} />
      <ForecastItem
        label="Temperature:"
        value={`${data.tempMax}°C ~ ${data.tempMax}°C`}
      />
      <ForecastItem label="Humidity:" value={data.humidity} />
      <ForecastItem
        label="Time:"
        value={dayjs(data.time).format("YYYY-MM-DD hh:mm A").toUpperCase()}
      />
    </div>
  );
};

export default ForecastView;
