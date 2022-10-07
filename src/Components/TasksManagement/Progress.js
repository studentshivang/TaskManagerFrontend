import DoneAllIcon from '@mui/icons-material/DoneAll';
const Progess = () => {
  return (
    <>
     
        
        <div className="List">
        <p className="TaskBoxHead">In Progress (18 Issues)</p>
        <p className="tasksListDiv">
            <ul>
                <li>
                    <span className="ListTask">Task 1</span>
                    <span className='ListIcon' style={{backgroundColor:"lightgreen"}}><DoneAllIcon/></span>
                </li>
                <li>
                    <span className="ListTask">Task 2</span>
                    <span className='ListIcon' style={{backgroundColor:"lightgreen"}}><DoneAllIcon/></span>
                </li>
                <li>
                    <span className="ListTask">Task 3</span>
                    <span className='ListIcon' style={{backgroundColor:"lightgreen"}}><DoneAllIcon/></span>
                </li>
                <li>
                    <span className="ListTask">Task 4</span>
                    <span className='ListIcon' style={{backgroundColor:"lightgreen"}}><DoneAllIcon/></span>
                </li>
                <li>
                    <span className="ListTask">Task 5</span>
                    <span className='ListIcon' style={{backgroundColor:"lightgreen"}}><DoneAllIcon/></span>
                </li>
                <li>
                    <span className="ListTask">Task 6</span>
                    <span className='ListIcon' style={{backgroundColor:"lightgreen"}}><DoneAllIcon/></span>
                </li>
                <li>
                    <span className="ListTask">Task 7</span>
                    <span className='ListIcon' style={{backgroundColor:"lightgreen"}}><DoneAllIcon/></span>
                </li>
                <li>
                    <span className="ListTask">Task 8</span>
                    <span className='ListIcon' style={{backgroundColor:"lightgreen"}}><DoneAllIcon/></span>
                </li>
            </ul>
        </p>
      </div>
    </>
  );
};

export default Progess;
