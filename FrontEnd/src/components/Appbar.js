import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import BookIcon from "@mui/icons-material/Book";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import * as React from "react";

import useBook from "../hooks/useBook";

export default function Appbar() {
  const { Reload } = useBook();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <BookIcon fontSize="large" />
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Book Keeping
          </Typography>
          <Button color="inherit" onClick={() => Reload()}>
            Refresh
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
