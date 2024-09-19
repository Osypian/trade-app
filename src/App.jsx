import { useState } from "react";
import "./App.css";
import {
  Container,
  Box,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  TableContainer,
  Grid2,
  Card,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import logo from "/2.png";
import PageNotFound from "./PageNotFound";

function App() {
  const [dummyData, setDummyData] = useState([]);
  const [name, setName] = useState("");
  const handleSubmit = () => {
    fetch(
      `https://dummyjson.com/products/search?q=${name}&limit=10&skip=10&select=title,price`
    )
      .then((res) => res.json())
      .then((data) => {
        setDummyData(data.products);
      });
  };
  return (
    <>
      <Container
        sx={{
          padding: "0",
          marginBlock: "5%",
          display: "flex",
          justifyContent: "center",
          width: "72vw",
          height: "80vh",
        }}
      >
        <Box
          sx={{
            width: "100%",
            borderRadius: "16px",
            height: "100%",
            backgroundColor: "#FFF",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
            // opacity: "0.8",
          }}
          container
          spacing={2}
        >
          <Box
            component="img"
            src={logo}
            sx={{
              width: "120px",
              height: "120px",
              position: "absolute",
              marginInline: "15px",
              marginBlock: "8px",
              top: "15px",
              left: "15px",
              "@media (max-width: 600px)": {
                width: "60px",
                height: "60px",
              },
            }}
          />

          <h1 style={{ textAlign: "center" }}>Chat Flow</h1>

          <Card sx={{ width: "70%", height: "50%", marginInline: "15%" }}>
            {dummyData.length === 0 ? (
              <PageNotFound />
            ) : (
              <TableContainer sx={{ marginInline: "auto" }}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Title</TableCell>
                      <TableCell align="right">ID</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {dummyData.map((row) => (
                      <TableRow
                        key={row.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.title}
                        </TableCell>
                        <TableCell align="right">{row.id}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </Card>
          <Grid2 container justifyContent="center" sx={{ margin: "10px" }}>
            <Grid2 item size={{ xs: 10, md: 9 }}>
              <TextField
                id="outlined-textarea"
                placeholder="Placeholder"
                multiline
                maxRows={3}
                fullWidth
                onChange={(e) => setName(e.target.value)}
                sx={{
                  color: "black",
                  "& .MuiOutlinedInput-root": {
                    color: "black",
                    "& fieldset": {
                      borderColor: "black", // Default outline color
                    },
                    "&:hover fieldset": {
                      borderColor: "black", // Outline color on hover
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "black", // Outline color when focused
                    },
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "black", // Placeholder color
                  },
                  "& .MuiInputLabel-root": {
                    color: "black", // Placeholder color
                  },
                }}
              />
            </Grid2>
            <Grid2
              item
              size={{
                xs: 5,
                md: 2,
              }}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                sx={{ marginBlock: "auto", marginInline: "0" }}
                variant="contained"
                endIcon={<SendIcon />}
                onClick={handleSubmit}
              >
                Classify
              </Button>
              ,
            </Grid2>
          </Grid2>
        </Box>
      </Container>
    </>
  );
}

export default App;
