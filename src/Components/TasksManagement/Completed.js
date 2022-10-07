import RestoreIcon from '@mui/icons-material/Restore';
const Completed = () => {
  return (
    <>
      <div className="List">
        <p className="TaskBoxHead">Completed Tasks(18 Issues)</p>
        <p className="tasksListDiv">
          <ul>
            <li>
              <span className="ListTask">Task 1</span>
              <span className="ListIcon" style={{ backgroundColor: "#ffb4a6" }}>
                <RestoreIcon />
              </span>
            </li>
            <li>
              <span className="ListTask">Task 2</span>
              <span className="ListIcon" style={{ backgroundColor: "#ffb4a6" }}>
                <RestoreIcon />
              </span>
            </li>
            <li>
              <span className="ListTask">Task 3</span>
              <span className="ListIcon" style={{ backgroundColor: "#ffb4a6" }}>
                <RestoreIcon />
              </span>
            </li>
            <li>
              <span className="ListTask">Task 4</span>
              <span className="ListIcon" style={{ backgroundColor: "#ffb4a6" }}>
                <RestoreIcon />
              </span>
            </li>
            <li>
              <span className="ListTask">Task 5</span>
              <span className="ListIcon" style={{ backgroundColor: "#ffb4a6" }}>
                <RestoreIcon />
              </span>
            </li>
            <li>
              <span className="ListTask">Task 6</span>
              <span className="ListIcon" style={{ backgroundColor: "#ffb4a6" }}>
                <RestoreIcon />
              </span>
            </li>
            <li>
              <span className="ListTask">Task 7</span>
              <span className="ListIcon" style={{ backgroundColor: "#ffb4a6" }}>
                <RestoreIcon />
              </span>
            </li>
            <li>
              <span className="ListTask">Task 8</span>
              <span className="ListIcon" style={{ backgroundColor: "#ffb4a6" }}>
                <RestoreIcon />
              </span>
            </li>
          </ul>
        </p>
      </div>
    </>
  );
};

export default Completed;
