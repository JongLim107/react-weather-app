import dayjs from "dayjs";
import "./styles.css";

const SearchHistory = ({ index, city, country, time, onSearch, onDelete }) => {
  let queryStr = ++index + ". " + city + ", " + country;
  if (queryStr.endsWith(", ")) {
    queryStr = queryStr.replace(", ", "");
  }

  return (
    <div className="SearchHistory">
      <div className="row TextContainer">
        <div className="col-md-6">{queryStr}</div>
        <div className="col-md-6 HistoryTime">
          {dayjs().format("hh:mm:ss A")}
        </div>
      </div>

      <div className="BtnContainer">
        <button onClick={() => onSearch(time)}>
          <i className="bi bi-search"></i>
        </button>
        <button onClick={() => onDelete(time)}>
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default SearchHistory;
