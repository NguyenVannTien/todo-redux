import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { todosRemainingSelector } from "../../redux/selectors";
import todoListSlice from './todoListSilce'

export default function TodoList() {

  const [todoName, setTodoName] = useState("");
  const [priority, setPriority] = useState("Medium");

  const dispatch = useDispatch();
  const todoList = useSelector(todosRemainingSelector);
  console.log('todolist:', todoList);

  const handleAddButtonClick = () => {
    dispatch(
      todoListSlice.actions.addTodo({
        id: uuidv4(),
        name: todoName,
        priority: priority,
        completed: false,
      })
    );
    setTodoName('');
    setPriority('Medium');
  };

  const handleInputChange = (e) => {
    setTodoName(e.target.value);
  };

  const handleChangePriority = (value) => {
    setPriority(value);
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((todo) =>(
          <Todo 
            key={todo.id} 
            id ={todo.id}
            name={todo.name} 
            prioriry={todo.priority} 
            completed ={todo.completed} 
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={todoName} onChange={handleInputChange} />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={handleChangePriority}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
