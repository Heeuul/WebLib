import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import * as React from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  elevation: 8,
}));

export default function DetailGrid({ book }) {
  const titleText = { fontSize: "15px" };
  const contentText = { fontSize: "30px" };

  return (
    <Box sx={{ width: "100%", padding: "50px auto" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {book.year && (
          <Grid item md={4}>
            <Item>
              <span style={titleText}>Published in</span>
              <br />
              <span style={contentText}>{book.year}</span>
            </Item>
          </Grid>
        )}
        {book.country && (
          <Grid item md={4}>
            <Item>
              <span style={titleText}>From</span>
              <br />
              <span style={contentText}>{book.country}</span>
            </Item>
          </Grid>
        )}
        {book.language && (
          <Grid item md={4}>
            <Item>
              <span style={titleText}>Available in</span>
              <br />
              <span style={contentText}>{book.language}</span>
            </Item>
          </Grid>
        )}
        {book.pages && (
          <Grid item md={4}>
            <Item>
              <span style={titleText}>Length</span>
              <br />
              <span style={contentText}>{book.pages} pages</span>
            </Item>
          </Grid>
        )}
        {book.isbn && (
          <Grid item md={8}>
            <Item>
              <span style={titleText}>ISBN</span>
              <br />
              <span style={contentText}>{book.isbn}</span>
            </Item>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}
