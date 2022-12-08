import React, { FC } from "react";
import { NativeSelect, FormControl, InputLabel } from "@mui/material";
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
      <FormControl sx={{ m: 1, minWidth: 240 }}>
        <InputLabel variant="outlined">Country</InputLabel>
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
    </div>
  );
};

export default SwitchCountry;
