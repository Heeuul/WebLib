import "./App.css";
import { Paper } from "@mui/material";

import { BookProvider } from "./hooks/useBook";
import OperationTabs from "./components/OperationTabs";
import BookDetails from "./tabs/BookDetails";
import Appbar from "./components/Appbar";

function App() {
  const paperStyle = {
    padding: "20px",
    height: "100%",
    width: "45%",
    flex: "1 1 50%",
    margin: "10px",
  };

  return (
    <BookProvider>
      <div className="App">
        <Appbar />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Paper elevation={8} style={paperStyle}>
            <OperationTabs />
          </Paper>

          <Paper elevation={8} style={paperStyle}>
            <BookDetails />
          </Paper>
        </div>
      </div>
    </BookProvider>
  );
}

export default App;
