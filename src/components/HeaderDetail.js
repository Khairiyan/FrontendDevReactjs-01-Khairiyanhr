import { useNavigate } from "react-router-dom";
import "../App.css";

function HeaderDetail() {
  const navigation = useNavigate();

  const handleBacktoHomepage = () => {
    navigation("/");
  };
  return (
    <>
      <div className="navbar bg-slate-800">
        <a className="btn btn-ghost text-white normal-case text-xl" onClick={() => handleBacktoHomepage()}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
          </svg>
        </a>
      </div>
    </>
  );
}

export default HeaderDetail;
