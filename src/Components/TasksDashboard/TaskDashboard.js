import LineChartDash from "./LineChartDash.js";
import PieChartDash from "./PieChartDash.js";

const TasksDashboard = () => {
  return (
    <>
      <section className="Task_DashBoard">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="Task_Dash_Head">Your Task Dashboard</h1>
            </div>

            <div className="row">
              <table className="Task_Dash_Table col-12">
                <tr>
                  <td className="ToDo_Table_Data col-6 col-md-6">To Do</td>
                  <td className="Progress_Table_Data col-6 col-md-6">100</td>
                </tr>
                <tr>
                  <td className="Progress_Table_Data col-6 col-md-6">
                    In Progress
                  </td>
                  <td className="Completed_Table_Data col-6 col-md-6">30</td>
                </tr>
                <tr>
                  <td className="Completed_Table_Data col-6 col-md-6">
                    Completed
                  </td>
                  <td className="ToDo_Table_Data col-6 col-md-6">501</td>
                </tr>
              </table>
            </div>
            <div className="row" id="Charts">
              <div className="col-md-6 col-12 charts ms-md-4">
                <h1 className="Task_Dash_Head head2 mt-5">Task Distribution</h1>
                <PieChartDash />
              </div>
              <div className="col-md-6 col-12 mt-5 charts">
                <h1 className="Task_Dash_Head head2">Monthly Distribution</h1>
                <div className="mt-5">
                  <LineChartDash />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TasksDashboard;
