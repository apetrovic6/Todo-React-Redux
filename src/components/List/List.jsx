import { useSelector, useDispatch } from "react-redux";
import { removeTodo, checkTodo } from "../../redux/Actions/index";

import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { Card } from "../Card/Card";
export const List = () => {
  const list = useSelector((state) => state.TodoReducer.todos);
  const dispatch = useDispatch();

  const renderList = () => {
    return list.map((item) => {
      const onDelete = () => {
        dispatch(removeTodo(item.id));
      };
      const onDone = () => {
        dispatch(checkTodo(item.id));
      };

      return (
        <li
          key={item.id}
          className="flex justify-between border px-3 py-3 my-2"
        >
          <Card className="w-full flex">
            <div className="self-center">
              <Input type="checkbox" className="mr-2" onChange={onDone} />
            </div>
            <p className={`${item.isDone && "line-through"}  mx-2 self-center`}>
              {item.content}
            </p>
          </Card>
          <Button text="Delete" color="blue" onClick={onDelete} />
        </li>
      );
    });
  };

  //console.log(list);
  return (
    <div>
      <ul className="mt-9">{renderList()}</ul>
    </div>
  );
};
