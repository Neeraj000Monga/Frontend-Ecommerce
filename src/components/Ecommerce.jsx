import PropTypes from "prop-types";
import { CardActions, CardContent, Grid, Typography } from "@mui/material";
import "react-loading-skeleton/dist/skeleton.css";
import {
  AddButton,
  CardMedia,
  CardShadow,
  ImgWrapper,
  Skeletons,
  TextEllipsis,
} from "../Style";
import { useNavigate } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { useDispatch, useSelector } from "react-redux";
import { toggleItem } from "../store/features/AddToItemSlice";

const Ecommerce = ({ userData }) => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const istoggleMode = useSelector((state) => state.auth);
  const addlist = useSelector((state) => state.addToItem.addlist);
  const dispatch = useDispatch();
  console.log("addlist", addlist);

  const navigate = useNavigate();
  const handleDetail = (userId) => {
    navigate(`/details/${userId}`);
  };

  const addToItem = (item) => {
    dispatch(toggleItem(item));
  };

  return (
    <>
      <Grid container>
        {userData?.length > 0 ? (
          <>
            {userData?.map((item, i) => (
              <Grid item key={i} xs={12} sm={6} md={4} lg={3} p={2}>
                <CardShadow
                  sx={{
                    background: istoggleMode?.darkmode ? "#383838" : "#fff",
                  }}
                >
                  <ImgWrapper>
                    <CardMedia
                      className="background-removed"
                      sx={{
                        height: "250px",
                        maxWidth: "270px",
                      }}
                      onClick={() => handleDetail(item?.id)}
                      component="img"
                      src={item?.image}
                      alt="icons"
                    />
                  </ImgWrapper>

                  <CardContent sx={{ padding: "5px 5%", textAlign: "center" }}>
                    <TextEllipsis
                      variant="h6"
                      component="div"
                      sx={{ color: !istoggleMode?.darkmode ? "#000" : "#fff" }}
                    >
                      {capitalizeFirstLetter(item?.category)}
                    </TextEllipsis>
                    <TextEllipsis
                      sx={{
                        fontSize: "15px",
                        color: !istoggleMode?.darkmode ? "#000" : "#fff",
                      }}
                      variant="h5"
                      component="div"
                    >
                      {item?.title}
                    </TextEllipsis>
                    <Typography
                      className="div"
                      sx={{
                        fontSize: "small",
                        lineHeight: 1.3,
                        marginTop: "5px",
                        color: !istoggleMode?.darkmode ? "gray" : "#fff",
                      }}
                    >
                      {item?.description}
                    </Typography>

                    <Rating readOnly value={item?.rating?.rate} />
                  </CardContent>

                  <CardActions
                    style={{
                      padding: "5px 15px 15px 15px",
                      justifyContent: "center",
                    }}
                  >
                    <AddButton
                      className="img_add"
                      sx={{
                        width: "100%",
                        maxWidth: "290px",
                        // border: "2px solid red",
                        background: istoggleMode?.darkmode ? "#000" : "#eadcdc",
                        color: !istoggleMode?.darkmode ? "#000" : "#fff",
                        ...(addlist?.some((add) => add?.id === item?.id) && {
                          background: istoggleMode?.darkmode
                            ? "#3e3e3e"
                            : "#fff",
                        }),
                      }}
                      onClick={() => addToItem(item)}
                    >
                      {addlist.some((add) => add?.id === item?.id)
                        ? "Remove"
                        : "Add"}
                    </AddButton>
                  </CardActions>
                </CardShadow>
              </Grid>
            ))}
          </>
        ) : (
          <>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((id) => {
              return (
                <>
                  <Grid item key={id} xs={12} sm={6} md={4} lg={3} p={2}>
                    <Skeletons
                      sx={{
                        background: istoggleMode?.darkmode
                          ? "#353535"
                          : "#cbced6",
                      }}
                    />
                  </Grid>
                </>
              );
            })}
          </>
        )}
      </Grid>
    </>
  );
};

Ecommerce.propTypes = {
  userData: PropTypes.array.isRequired,
};

export default Ecommerce;
