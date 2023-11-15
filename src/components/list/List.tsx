import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { Input } from "../input";
import style from "./List.module.css";

interface ListProps {
  data: string[];
  setSelected: Dispatch<SetStateAction<string>>;
}

export const List = (props: ListProps) => {
  const { data, setSelected } = props;
  const [inputValue, setInputValue] = useState<string>("");
  const [filteredData, setFilteredData] = useState<string[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  useEffect(() => {
    const filterData = (input: string) => {
      return data.filter((item) => {
        if (!input) {
          setSelected(input);
        }
        return item.toLowerCase().includes(input.toLowerCase());
      });
    };
    setFilteredData(filterData(inputValue));
  }, [inputValue, data]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);
    setIsDropdownOpen(true);
  };

  const handleItemClick = (item: string) => {
    setInputValue(item);
    setIsDropdownOpen(false);
    setSelected(item);
  };

  const ref = useOutsideClick<HTMLDivElement>(() => setIsDropdownOpen(false));

  return (
    <div className={style.list} ref={ref}>
      <Input
        value={inputValue}
        onChange={handleInputChange}
        className={style.input}
        onClick={() => setIsDropdownOpen(true)}
      >
        {isDropdownOpen && (
          <ul className={style.dropdown}>
            {filteredData.map((item) => (
              <li
                key={item}
                onClick={() => handleItemClick(item)}
                aria-hidden="true"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </Input>
    </div>
  );
};
