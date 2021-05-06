import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/Actions/index";

import { Input } from "../Input/Input";
import { Button } from "../Button/Button";

export const AddTodo = () => {
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const onChange = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const id = Math.random();
    const isDone = false;

    dispatch(addTodo({ content, id, isDone }));
    setContent("");
  };

  return (
    <form onSubmit={onSubmit} className="space-x-2">
      <Input placeholder="Todo" value={content} onChange={onChange} />
      <Button color="green" text="Add todo" />
    </form>
  );
};
