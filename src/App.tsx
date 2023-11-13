import style from "./App.module.css";
import { data } from "./utils/data";
import { useState } from "react";
import cn from "classnames";
import { LinearChart } from "./components/graph";
import { DataGrid } from "./components/table";
import { List } from "./components/list";

export const App = () => {
  const [filterRegion, setFilterRegion] = useState<string>("");
  const columns = ["Регион", "Год", "Показатель"];
  const regionNames = Array.from(new Set(data.map((item) => item["Регион"])));
  const filteredData = filterRegion
    ? data.filter((el) => el.Регион == filterRegion)
    : data;

  const sum = filteredData.reduce((acc, region) => acc + region.Показатель, 0);
  const average = sum / filteredData.length;

  return (
    <div className={style.wrap}>
      <div className={style.graph}>
        <LinearChart data={filteredData} />
      </div>
      <div className={style.container}>
        <DataGrid data={filteredData} columns={columns} />
        <div className={style.secondWrap}>
          <div>Выберите регион из списка</div>
          <List data={regionNames} setSelected={setFilterRegion} />
        </div>
        <div
          className={cn(
            style.averageBox,
            Math.ceil(average) > 82 ? style.averageHigh : style.averageLow
          )}
        >
          {`Средний показатель - ${Math.ceil(average)}`}
        </div>
      </div>
    </div>
  );
};
