import { useNavigate } from "react-router-dom";
import "../App.css";

function Items(props) {
  const navigation = useNavigate();
  const handleSubmit = (event) => {
    /* 1. Navigate to the Details route with params */
    console.log(event.target.value);
    navigation("/detail", {
      state: event.target.value,
    });
  };
  return (
    <div>
      <div className="card w-72 shadow-xl ">
        <ul>
          <li key={props.id}>
            <div className="card-body">
              <figure>
                <img src={props.image} alt="Shoes" />
              </figure>
              <h2 className="card-title capitalize">{props.name}</h2>
              <span>{props.type}</span>
              <span>Reviews : {props.reviews}</span>
              <div className="card-actions justify-center">
                <button className="btn btn-primary w-full" value={props.id} onClick={(event) => handleSubmit(event)}>
                  Read More
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Items;
