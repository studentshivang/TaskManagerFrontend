import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    month: "Aug",
    Todo: 40,
    In_Progress: 24,
    Completed:20,
    amt: 24,
  },
  {
    month: "Sept",
    Todo: 30,
    In_Progress: 18,
    Completed:30,
    amt: 10,
  },
  {
    month: "Oct",
    Todo: 20,
    In_Progress: 7,
    Completed:20,
    amt: 20,
  },
  {
    month: "Nov",
    Todo: 20,
    In_Progress: 38,
    Completed:30,
    amt: 20,
  },
  {
    month: "Dec",
    Todo: 18,
    In_Progress: 48,
    Completed:20,
    amt: 21,
  },
  {
    month: "Jan",
    Todo: 23,
    In_Progress: 38,
    Completed:40,
    amt: 25,
  },
  {
    month: "Feb",
    Todo: 30,
    In_Progress: 43,
    Completed:20,
    amt: 21,
  },
];

const LineChartDash = () => {
  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="Todo"
        stroke="#f765a3"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="In_Progress" stroke="orange" />
      <Line type="monotone" dataKey="Completed" stroke="green" />
    </LineChart>
  );
};

export default LineChartDash;
