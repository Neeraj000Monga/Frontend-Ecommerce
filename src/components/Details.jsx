import { CardShadow, ColumnSection, Wrapper } from "../Style";
import {
  Box,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Details = () => {
  const { userId } = useParams();
  const [data, setData] = useState([]);

  const istoggleMode = useSelector((state) => state.auth);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setData(res.data);
    });
  }, []);

  const matchedData = data?.find((item) => item?.id === parseInt(userId));
  const item = matchedData;

  const capitalizeFirstLetter = (string) => {
    return string?.charAt(0).toUpperCase() + string?.slice(1);
  };

  return (
    <Container
      sx={{
        flexDirection: "column",
        alignItems: "center",
        display: "flex",
      }}
    >
      <Box sx={{ paddingTop: "30px", maxWidth: "900px" }}>
        <Typography
          gutterBottom
          sx={{
            fontSize: "2rem",
            textAlign: "center",
            color: istoggleMode?.darkmode ? "#fff" : "#000",
          }}
        >
          product details
        </Typography>
        <CardShadow
          sx={{
            maxWidth: "760px",
            background: istoggleMode?.darkmode ? "#1e293b" : "#fff",
          }}
        >
          <Wrapper>
            <ColumnSection sx={{ alignItems: "center" }}>
              <CardContent>
                <CardMedia
                  sx={{
                    height: "330px",
                    maxWidth: "350px",
                    objectFit: "inherit",
                  }}
                  component="img"
                  src={item?.image}
                  alt="icons"
                />
              </CardContent>
            </ColumnSection>

            <ColumnSection sx={{ padding: "30px" }}>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  sx={{ color: istoggleMode?.darkmode ? "#fff" : "#000" }}
                >
                  {capitalizeFirstLetter(item?.category)}
                </Typography>
                <Typography
                  sx={{ color: istoggleMode?.darkmode ? "#fff" : "#000" }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  {item?.title}
                </Typography>
                <Typography
                  sx={{ color: istoggleMode?.darkmode ? "#fff" : "#000" }}
                  variant="body2"
                  color="text.secondary"
                >
                  {item?.description}
                </Typography>
              </CardContent>
            </ColumnSection>
          </Wrapper>
        </CardShadow>
      </Box>
    </Container>
  );
};



export default Details;
