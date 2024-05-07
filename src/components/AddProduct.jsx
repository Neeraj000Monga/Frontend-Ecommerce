import PropTypes from "prop-types";

import { Box, CardContent, Container, Typography } from "@mui/material";
import {
  AddButton,
  AddMedia,
  CardShadow,
  ColumnSection,
  Fabe,
  Wrapper,
} from "../Style";
import Rating from "@mui/material/Rating";
import ClearIcon from "@mui/icons-material/Clear";
import { useTheme } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";

const AddProduct = ({ addToItem }) => {
  const [amount, setAmount] = useState(1);
  const [value, setValue] = useState(2);
  const theme = useTheme();

  const addlist = useSelector((state) => state.addToItem.addlist);

  const stock = 5;
  const istoggleMode = useSelector((state) => state.auth);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };
  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };


  return (
    <Container
      sx={{
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "30px",
        display: "flex",
        gap: "10px",
        background: istoggleMode?.darkmode ? "#000" : "#fff",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "760px",
        }}
      >
        <Typography
          variant=""
          sx={{
            fontSize: "1.3rem",
            color: !istoggleMode?.darkmode ? "#000" : "#fff",
          }}
        >
          AddProduct
        </Typography>
      </Box>
      {console.log("addlist", addlist)}
      {addlist?.map((item, index) => (
        <CardShadow
          key={index}
          sx={{
            maxWidth: "760px",
            background: istoggleMode?.darkmode ? "#383838" : "#fff",
          }}
        >
          <Wrapper
            sx={{
              justifyContent: "flex-start",

              [theme.breakpoints.down("md")]: {
                alignItems: "center",
              },
            }}
          >
            <ColumnSection sx={{ maxWidth: "340px", alignItems: "center" }}>
              <CardContent>
                {item?.image && <AddMedia src={item?.image} alt="Product" />}
              </CardContent>
            </ColumnSection>

            <ColumnSection
              sx={{ justifyContent: "space-between", maxWidth: "400px" }}
            >
              <CardContent>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "end",
                    paddingBottom: "10px",
                  }}
                >
                  <Fabe onClick={() => addToItem(item)}>
                    <ClearIcon />
                  </Fabe>
                </Box>
                <Typography
                  gutterBottom
                  variant="h5"
                  sx={{ color: !istoggleMode?.darkmode ? "#000" : "#fff" }}
                >
                  {item?.title}
                </Typography>
                <Typography
                  gutterBottom
                  variant="body2"
                  color="text.secondary"
                  sx={{ color: !istoggleMode?.darkmode ? "#000" : "#fff" }}
                >
                  {item?.description}
                </Typography>
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
                <Typography variant="body2" color="red">
                  Price ₹{item?.price}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: "flex",
                  padding: "15px 0px",
                  gap: "5px",
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                <AddButton
                  className="img_add"
                  onClick={setDecrease}
                  sx={{
                    fontSize: "medium",
                    background: istoggleMode?.darkmode ? "#000" : "#eadcdc",
                    color: !istoggleMode?.darkmode ? "#000" : "#fff",
                  }}
                >
                  -
                </AddButton>

                <AddButton
                  className="img_add"
                  sx={{
                    fontSize: "medium",
                    background: istoggleMode?.darkmode ? "#000" : "#eadcdc",
                    color: !istoggleMode?.darkmode ? "#000" : "#fff",
                  }}
                >
                  {amount}
                </AddButton>
                <AddButton
                  className="img_add"
                  onClick={setIncrease}
                  sx={{
                    fontSize: "medium",
                    background: istoggleMode?.darkmode ? "#000" : "#eadcdc",
                    color: !istoggleMode?.darkmode ? "#000" : "#fff",
                  }}
                >
                  +
                </AddButton>
              </Box>
            </ColumnSection>
          </Wrapper>
        </CardShadow>
      ))}
    </Container>
  );
};

AddProduct.propTypes = {
  addToItem: PropTypes.func.isRequired,
  setAddlist: PropTypes.func.isRequired,
};

export default AddProduct;
