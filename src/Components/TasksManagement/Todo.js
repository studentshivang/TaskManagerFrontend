import StartIcon from '@mui/icons-material/Start';

const Todo = () => {
  return (
    <>
      <div className="List">
        <p className="TaskBoxHead">TO DO(18 Issues)</p>
        <p className="tasksListDiv">
            <ul>
                <li>
                    <span className="ListTask">Task 1</span>
                    <span className='ListIcon' style={{backgroundColor:"#ffb4a6"}}><StartIcon/></span>
                </li>
                <li>
                    <span className="ListTask">Task 2</span>
                    <span className='ListIcon' style={{backgroundColor:"#ffb4a6"}}><StartIcon/></span>
                </li>
                <li>
                    <span className="ListTask">Task 3</span>
                    <span className='ListIcon' style={{backgroundColor:"#ffb4a6"}}><StartIcon/></span>
                </li>
                <li>
                    <span className="ListTask">Task 4</span>
                    <span className='ListIcon' style={{backgroundColor:"#ffb4a6"}}><StartIcon/></span>
                </li>
                <li>
                    <span className="ListTask">Task 5</span>
                    <span className='ListIcon' style={{backgroundColor:"#ffb4a6"}}><StartIcon/></span>
                </li>
                <li>
                    <span className="ListTask">Task 6</span>
                    <span className='ListIcon' style={{backgroundColor:"#ffb4a6"}}><StartIcon/></span>
                </li>
                <li>
                    <span className="ListTask">Task 7</span>
                    <span className='ListIcon' style={{backgroundColor:"#ffb4a6"}}><StartIcon/></span>
                </li>
                <li>
                    <span className="ListTask">Task 8</span>
                    <span className='ListIcon' style={{backgroundColor:"#ffb4a6"}}><StartIcon/></span>
                </li>
            </ul>
        </p>
      </div>
    </>
  );
};

export default Todo;
