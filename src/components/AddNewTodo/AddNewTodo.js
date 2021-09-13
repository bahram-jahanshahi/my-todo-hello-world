import React, { useState } from "react";
import {
  Button,
  Paper,
  Card,
  CardContent,
  CardActions,
  CardHeader,
  TextField,
  Grid,
} from "@material-ui/core";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import TimePicker from "@mui/lab/TimePicker";
import SaveIcon from "@material-ui/icons/Save";

function AddNewTodo(props) {
  // The first commit of Material-UI
  const [enteredTitle, setEnteredTitle] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  // Save a new todo
  const onSaveNewTodoClickHandler = () => {
    if (isValid()) {
      props.onAddNewTodo({
        id: Math.floor(Math.random() * 9999999) + 9000000,
        title: enteredTitle,
        date: selectedDate,
        time: selectedTime,
      });
      onResetFormHandler();
    } else {
        alert('Error ...');
    }
  };

  // Reset the input fields of the form
  const onResetFormHandler = () => {
    setEnteredTitle("");
    setSelectedTime(null);
    setSelectedDate(null);
  };

  // Validation
  const isValid = () => {
    return (
      enteredTitle.length > 0 && selectedDate !== null && selectedTime !== null
    );
  };

  return (
    <Card variant="outlined">
      <CardHeader title="New Todo"></CardHeader>
      <CardContent>
        <Grid container justifyContent="space-around">
          <TextField
            id="titleToDo"
            label="Title"
            variant="outlined"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Date"
              value={selectedDate}
              onChange={(newValue) => {
                setSelectedDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <TimePicker
              label="Time"
              value={selectedTime}
              onChange={(newValue) => {
                setSelectedTime(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          size="medium"
          color="primary"
          startIcon={<SaveIcon />}
          onClick={onSaveNewTodoClickHandler}
        >
          Add New Todo
        </Button>
      </CardActions>
    </Card>
  );
}

export default AddNewTodo;
