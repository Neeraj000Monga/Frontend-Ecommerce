import { Box, Button, Card, Skeleton, styled, Typography } from "@mui/material";
import Fab from "@mui/material/Fab";

// scrollbarWidth: 'thin',
// sx={{"background": "linear-gradient(#e66465, #9198e5)"}}
export const CardWrapper = styled(Box)({
  paddingTop: "15px",
  gap: "32px",
  width: "100%",
  // rowGap: "40px",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
});
export const DetailsWrapper = styled(Box)({
  width: "100%",
  margin: "auto",
});
export const AddButton = styled(Button)({
  textTransform: "capitalize",
  background: "#E8E8E8",
  borderRadius: "5px",
  fontWeight: 600,
  color: "#000",
  // width: "100%",
  border: 0,
  "&:hover": {
    backgroundColor: "#252525",
    color: "#fff",
  },
});
export const Add = styled(Button)({
  textTransform: "capitalize",
  background: "#E8E8E8",
  borderRadius: "5px",
  fontWeight: 600,
  // lineHeight: 1,
  color: "#000",
  border: 0,
  "&:hover": {
    backgroundColor: "#d3cdcd",
    // color: "#fff",
  },
});

export const CardMedia = styled("img")({
  width: "100%",
  height: "300px",
  maxWidth: "290px",
  padding: "5px",
  cursor: "pointer",
});

export const AddMedia = styled("img")(({ theme }) => ({
  borderRadius: "5px",
  height: "250px",
  // width: "100%",
  width: "300px",
  [theme.breakpoints.up("md")]: {
    width: "300px",
    height: "300px",
  },
}));
export const Fabe = styled(Fab)(() => ({
  minHeight: "30px",
  width: "30px",
  height: "30px",
}));
export const ImgWrapper = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  paddingTop: "14px",
}));
export const TextEllipsis = styled(Typography)(() => ({
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  lineHeight: 1.3,
}));

export const CardShadow = styled(Card)({
  boxShadow: `0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 5px 0px rgba(0,0,0,0.4), 0px 1px 3px 0px rgba(0,0,0,0.12)`,
  maxWidth: "1000px",
  width: "100%",
});

export const GraphicalText = styled(Box)(({ theme }) => ({
  fontSize: "18px",
  lineHeight: "133.4%",
  [theme.breakpoints.up("md")]: {
    maxWidth: "50%",
    fontSize: "22px",
  },
}));

export const ColumnSection = styled(Box)({
  width: "100%",
  maxWidth: "466px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "24px",
  flex: 1,
});
export const Wrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  fontSize: "24px",
  gap: "20px",
  color: "rgba(0, 0, 0, 0.87)",
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
  },
}));

export const Skeletons = styled(Skeleton)(() => ({
  transform: "none",
  height: "434px",
  width: "100%",
}));

// import { useTheme } from "@mui/material";

//  const theme = useTheme();

//           <NavButton

//             sx={{
//               left: "0%",
//               [theme.breakpoints.up("md")]: {
//                 left: "14%"
//               }
//             }}>

//           </NavButton>

// box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12);
