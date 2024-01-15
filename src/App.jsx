import Error from "./component/Error";
import List from "./component/List";
import Header from "./component/Header";
import Name from "./component/Name";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
const App = () => {
  const initialList = [];

  let [list, setList] = useState(initialList);

  const handleOnExchange = (todoName, todoDate) => {
    // console.log(`name:${todoName},Date : ${todoDate}`);
    const newTodoList = [...list, { name: todoName, date: todoDate }];
    setList(newTodoList);
  };

  const handleOnDelete = (todoName) => {
    console.log(`item Deleted ${todoName}`);
    const newTodoItem = list.filter((item) => item.name !== todoName);
    setList(newTodoItem);
  };

  return (
    <>
      <div className="outer">
        <div className="inner">
          <center>
            <Name />
            <Header pass={handleOnExchange} />
            <Error passSec={list} />
            <List pass={list} onDelete={handleOnDelete} />
          </center>
        </div>
      </div>
    </>
  );
};
export default App;
