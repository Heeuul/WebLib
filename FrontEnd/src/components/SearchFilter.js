import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import * as React from "react";

export default function SearchFilter({ filterValue, SetFilter }) {
  const handleChange = (event) => SetFilter(event.target.value);

  return (
    <FormControl style={{ flex: 1 }}>
      <InputLabel id="demo-simple-select-label">Filter</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={filterValue}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value={"any"}>None</MenuItem>
        <MenuItem value={"title"}>Title</MenuItem>
        <MenuItem value={"author"}>Author</MenuItem>
        <MenuItem value={"isbn"}>ISBN</MenuItem>
        <MenuItem value={"country"}>Country</MenuItem>
        <MenuItem value={"language"}>Language</MenuItem>
        <MenuItem value={"link"}>Link</MenuItem>
        <MenuItem value={"pages"}>Pages</MenuItem>
        <MenuItem value={"year"}>Year</MenuItem>
      </Select>
    </FormControl>
  );
}
