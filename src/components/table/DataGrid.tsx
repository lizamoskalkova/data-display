import style from "./DataGrid.module.css";

type DataItem = {
  [key: string]: string | number;
};

interface DataGridProps {
  data: DataItem[];
  columns: string[];
}

export const DataGrid = ({ data, columns }: DataGridProps) => {
  return (
    <div className={style.container}>
      <table className={style.table}>
        <thead className={style.tableHead}>
          <tr>
            {columns.map((column, index) => (
              <th key={index} className={style.tableCellHead}>
                {column}
              </th>
            ))}
          </tr></thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((column, colIndex) => (
                  <td key={colIndex} className={style.tableCell}>
                    {row[column]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
      </table>
    </div>
  );
};
