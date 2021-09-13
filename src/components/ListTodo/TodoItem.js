import React, { useState } from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import { IconButton, ListItemIcon, ListItemSecondaryAction } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import Switch from "@material-ui/core/Switch";
import TimerIcon from "@material-ui/icons/Timer";
import CheckCircleOutlinedIcon from "@material-ui/icons/CheckCircleOutlined";

function TodoItem(props) {
  const todo = props.item;

  const [selctedDoneStatus, setSelectedDoneStatus] = useState(todo.doneStatus);

  console.log(selctedDoneStatus);

  const todoDate =
    todo.date.getFullYear() +
    "/" +
    todo.date.getMonth() +
    "/" +
    todo.date.getDate();

  const statusChangeHandler = (event) => {
    setSelectedDoneStatus(!selctedDoneStatus);
  };

  return (
    <List>
      <ListItem>
        <ListItemIcon>
            {selctedDoneStatus ? <CheckCircleOutlinedIcon color="secondary" /> : <TimerIcon />}
        </ListItemIcon>
        <ListItemText primary={todo.title} secondary={todoDate} />
        <ListItemSecondaryAction>
          <Switch
            checked={selctedDoneStatus}
            onChange={statusChangeHandler}
            name="checkedA"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
          <IconButton edge="end">
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
}

export default TodoItem;
