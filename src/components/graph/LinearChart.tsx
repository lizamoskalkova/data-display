import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Legend,
  Line,
} from "recharts";
import style from "./LinearChart.module.css";

interface DataPoint {
  Регион: string;
  Год: number;
  Показатель: number;
}

interface LinearChartProps {
  data: DataPoint[];
}

export const LinearChart = ({ data }: LinearChartProps) => {
  return (
    <LineChart
      width={730}
      height={300}
      data={data}
      className={style.chart}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="Год" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="Показатель" stroke="#82ca9d" />
    </LineChart>
  );
};
