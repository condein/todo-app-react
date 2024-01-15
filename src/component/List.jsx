import TodoList from "./TodoList";
const List = ({ pass, onDelete }) => {
  return (
    <>
      {pass.map((e) => (
        <TodoList
          key={e.name}
          todoName={e.name}
          todoDate={e.date}
          del={onDelete}
        />
      ))}
    </>
  );
};
export default List;
