import React from "react";

import { Card } from "./components/Card/Card";
import { AddTodo } from "./components/AddTodo/AddTodo";
import { List } from "./components/List/List";

const App = () => {
  return (
    <div className="flex justify-center my-16">
      <Card>
        <AddTodo />
        <List />
      </Card>
    </div>
  );
};
export default App;
