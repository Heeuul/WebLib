import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";
import * as React from "react";

import UpdateBook from "../tabs/UpdateBook";
import BookList from "../tabs/BookList";
import FindBook from "../tabs/FindBook";
import AddBook from "../tabs/AddBook";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={"span"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function OperationTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Add Book" {...a11yProps(0)} />
          <Tab label="Find Book" {...a11yProps(1)} />
          <Tab label="Update Book" {...a11yProps(2)} />
          <Tab label="Book List" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <AddBook />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <FindBook />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <UpdateBook />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <BookList />
      </CustomTabPanel>
    </Box>
  );
}
