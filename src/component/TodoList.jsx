import { MdDeleteSweep } from "react-icons/md";
const TodoList = ({ todoName, todoDate, del }) => {
  return (
    <>
      <div className="container text-center sec ">
        <div className="row">
          <div className="col-4 tex">{todoName}</div>
          <div className="col-4 dat">{todoDate}</div>
          <div className="col-4">
            <button
              className="btn btn-warning btn1"
              onClick={() => del(todoName)}
            >
              <MdDeleteSweep />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default TodoList;
