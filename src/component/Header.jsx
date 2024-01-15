import { useState } from "react";
import { MdAddToPhotos } from "react-icons/md";

const Header = ({ pass }) => {
  let [todoName, setName] = useState("");
  let [todoDate, setDate] = useState("");

  const handleOnName = (e) => {
    setName(e.target.value);
  };

  const handleOnDate = (e) => {
    setDate(e.target.value);
  };

  const handleOnClick = () => {
    pass(todoName, todoDate);
    setDate("");
    setName("");
  };
  return (
    <>
      <div className="container text-center sec">
        <div className="row">
          <div className="col-4">
            <input
              type="text"
              value={todoName}
              placeholder="Enter Here"
              onChange={handleOnName}
            />
          </div>
          <div className="col-4">
            <input type="date" value={todoDate} onChange={handleOnDate} />
          </div>
          <div className="col-4">
            <button className="btn btn-success btn1" onClick={handleOnClick}>
              {" "}
              <MdAddToPhotos />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
