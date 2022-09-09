import "../App.css";

function Filter() {
  return (
    <>
      <div className="navbar bg-white border-2 border-transparent border-y-black">
        <div className="navbar-start">
          <p className="mr-3">Filter by:</p>
          <ul className="flex flex-row items-center justify-center gap-x-4 text-blue-500">
            <li>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input type="checkbox" className="checkbox mr-2" />
                  <span className="label-text ">Open Now</span>
                </label>
              </div>
            </li>
            <li>
              <select className="select w-full max-w-xs">
                <option disabled selected>
                  Restaurant Type
                </option>
                <option>Canteen</option>
                <option>Bukka</option>
                <option>Eatery</option>
              </select>
            </li>
            <li>
              <select className="select w-full max-w-xs">
                <option disabled selected>
                  Reviews
                </option>
                <option>100</option>
                <option>{`80-99`}</option>
                <option>{`60-79`}</option>
                <option>{`40-59`}</option>
                <option>{`20-39`}</option>
                <option>{`00-19`}</option>
              </select>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-ghost w-36">clear</a>
        </div>
      </div>
    </>
  );
}

export default Filter;
