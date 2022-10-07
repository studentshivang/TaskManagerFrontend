import * as React from "react";
import { useState } from "react";
import Todo from "./Todo";
import Progress from "./Progress";
import Completed from "./Completed";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { TimePicker } from "@mui/x-date-pickers/TimePicker";
// import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
// import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const TasksManagement = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = useState(dayjs(new Date()));

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <button className="btn btn-primary mb-2">
        <Button onClick={handleOpen} style={{ color: "#fff" }}>
          Create Post
        </Button>
      </button>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <label htmlFor="task">
              Enter Task: <br />
              <textarea name="task" id="" cols="40" rows="2"></textarea>
            </label>
            <label htmlFor="deadline">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Stack spacing={3}>
                  {/* <DesktopDatePicker
                    label="Date desktop"
                    inputFormat="MM/DD/YYYY"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                  /> */}
                  <MobileDatePicker
                    label="Deadline"
                    inputFormat="MM/DD/YYYY"
                    value={value}
                    onChange={handleChange}
                    className="mt-2 mb-1"
                    renderInput={(params) => <TextField {...params} />}
                  />
                  {/* <TimePicker
                    label="Time"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                  /> */}
                  {/* <DateTimePicker
                    label="Date&Time picker"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                  /> */}
                </Stack>
              </LocalizationProvider>
            </label>
            <button className="btn btn-info mb-2" type="submit">
              <Button style={{ color: "#fff" }}>Create Post</Button>
            </button>
          </Box>
        </Modal>
      </div>
      <div>
        {/* <div className="row col-12">
          <div className="col-12 col-md-6 col-lg-6 taskBox bg-transparent">
            <Todo />
          </div>
          <div className="col-12 col-md-6 col-lg-6 taskBox bg-transparent">
            <Progress />
          </div>
          <div className="col-12 col-md-6 col-lg-6 taskBox bg-transparent">
            <Completed />
          </div>

        </div> */}
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Item style={{ backgroundColor: "#f765a3"}}><Todo/></Item>
          </Grid>
          <Grid item xs={12} md={6}>
            <Item style={{ backgroundColor: "#ffb4a6"}}><Progress/></Item>
          </Grid>
          <Grid item xs={12} md={6}>
            <Item style={{ backgroundColor: "lightgreen" }}><Completed/></Item>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default TasksManagement;
