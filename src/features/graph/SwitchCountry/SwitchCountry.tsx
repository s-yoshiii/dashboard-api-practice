import React, { FC } from "react";
import { NativeSelect, FormControl } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useAppDispatch } from "../../../app/hooks";
import { fetchAsyncGetDaily } from "../graphSlice";
const SwitchCountry: FC = () => {
  const dispatch = useAppDispatch();
  const contries = [
    "japan",
    "united-states",
    "germany",
    "new-zealand",
    "australia",
    "china",
    "vietnam",
    "thailand",
  ];
  return (
    <div>
      <FormControl>
        <NativeSelect
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            dispatch(fetchAsyncGetDaily(e.target.value))
          }
        >
          {contries.map((contry, i) => (
            <option key={i} value={contry}>
              {contry}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
      ;
    </div>
  );
};

export default SwitchCountry;
