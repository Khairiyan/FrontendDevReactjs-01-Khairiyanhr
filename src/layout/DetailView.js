import "../App.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import HeaderDetail from "../components/HeaderDetail";
import Footer from "../components/Footer";

function DetailView() {
  const { state } = useLocation();
  const [menu, setMenu] = useState([]);
  const navigate = useNavigate();
  const isLogin = localStorage.getItem("token");
  const getDataMenu = async () => {
    const getMenu = await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/restaurant/${state}`);
    setMenu(getMenu.data.data);
  };

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    } else {
      getDataMenu();
    }
  }, []);
  return (
    <>
      <HeaderDetail />
      <div className="px-52">
        <div className="hero bg-white justify-start">
          <div className="hero-content flex-row ">
            <img src={menu.image} className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold capitalize">{menu.businessname}</h1>
              <p className="mt-8">Email : {menu.email}.</p>
              <p className="">Phone : {menu.phone}.</p>
              <p className="mb-6">Location : {menu.location}.</p>
              <button className="btn btn-primary">Pesan Sekarang</button>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-8">
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div className="stat-title">Reviews</div>
              <div className="stat-value">{menu.reviews}</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                </svg>
              </div>
              <div className="stat-title">Average Cost</div>
              <div className="stat-value">{menu.averagecost}</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
                </svg>
              </div>
              <div className="stat-title">Restaurant Type</div>
              <div className="stat-value capitalize">{menu.restauranttype}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[15.3rem]">
        <Footer />
      </div>
    </>
  );
}

export default DetailView;
