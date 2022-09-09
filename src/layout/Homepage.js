import axios from "axios";
import { useEffect, useState } from "react";
import "../App.css";
import Filter from "../components/Filter";
import Items from "../components/Items";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(3);
  const navigate = useNavigate();
  const isLogin = localStorage.getItem("token");

  const LoadMore = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  const getData = async () => {
    const data = await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/restaurant`);
    console.log(data.data.Result);
    setItems(
      data.data.Result?.map((item) => {
        return {
          id: item.id,
          name: item.businessname,
          image: item.image,
          reviews: item.reviews,
          type: item.restauranttype,
        };
      })
    );
    console.log(items);
  };

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    } else {
      getData();
    }
  }, []);
  return (
    <>
    <Header/>
      <div className="bg-white px-52 mb-8">
        <h1 className="text-3xl font-bold text-black mt-8">Restaurants</h1>
        <p>Berikut daftar Restaurant yang telah tersedia</p>
        <div className="my-4">
          <Filter />
        </div>
        <h2 className="mt-6 mb-4">All Restaurant</h2>
        <div className="grid grid-cols-3 gap-8 ">
          {items.slice(0, visible).map((item) => (
            <Items id={item.id} name={item.name} image={item.image} reviews={item.reviews} type={item.type} />
          ))}
        </div>
        <div className="flex justify-center items-center mt-8">
          <button className="btn btn-primary w-52 mr-14" onClick={() => LoadMore()}>
            Load More
          </button>
        </div>
      </div>
      <div className="mt-[3rem]">
        <Footer />
      </div>
    </>
  );
}

export default Homepage;
