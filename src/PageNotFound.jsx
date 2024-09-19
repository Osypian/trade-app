import { Box, Container, Typography } from "@mui/material";

const PageNotFound = () => {
  return (
    <Container sx={{ textAlign: "center", marginTop: "10%" }}>
      <Box>
        <Typography variant="h4" component="h4" gutterBottom>
          Product Not Found
        </Typography>
        <Typography variant="h6" component="h6" gutterBottom>
          please try some other product name
        </Typography>
      </Box>
    </Container>
  );
};

export default PageNotFound;
