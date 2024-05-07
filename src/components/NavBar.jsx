import * as React from "react";
import PropTypes from "prop-types";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MoreIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { mode } from "../store/features/darkSlice";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const NavBar = ({ setUserData, data, handleDrawerOpen, open }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const istoggleMode = useSelector((state) => state.auth);
  const addlist = useSelector((state) => state.addToItem.addlist);
  // console.log(istoggleMode, "IsToggleMode");

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const navigate = useNavigate();

  // ***************** Redux ToolKit ******************
  const dispatch = useDispatch();
  // ***************** Redux ToolKit ******************
  const handleClick = () => {
    navigate("/AddProduct");
  };
  const BackHandler = () => {
    navigate("/");
  };

  // ***************** SearchFilter ***********************

  // ***************** darkMode ***********************
  // const [darkMode, setDarkMode] = useState(
  //   localStorage.getItem("darkMode") === "true"
  // );
  //  ==
  // useEffect(() => {
  //   localStorage.setItem("darkMode", darkMode);
  //   localStorage.setItem("addlist", JSON.stringify(addlist));
  // }, [darkMode, addlist]);
  //  ==
  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  // };
  //==
  //   <IconButton onClick={toggleDarkMode}>
  //   {darkMode ? (
  //     <Brightness7Icon sx={{ color: darkMode ? "#fff" : "#000" }} />
  //   ) : (
  //     <Brightness4Icon sx={{ color: darkMode ? "#fff" : "#000" }} />
  //   )}
  // </IconButton>

  // ***************** darkMode ***********************
  const Filter = (event) => {
    setUserData(
      data?.filter((f) =>
        f.title.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
    console.log("value", event.target.value);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" color="inherit">
          <Badge
           badgeContent={addlist?.length}
           color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  // ***************** Redux ToolKit ******************

  const toggleDarkModeV2 = () => {
    dispatch(mode());
  };

  // ***************** Redux ToolKit ******************

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "#757575" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              mr: 2,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon sx={{ color: "#fff" }} />
          </IconButton>
          <IconButton
            size="small"
            sx={{
              padding: "20px",
              color: "#fff",
            }}
            onClick={BackHandler}
          >
            Home
          </IconButton>

          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{ color: "#fff" }} />
            </SearchIconWrapper>
            <StyledInputBase
              sx={{ color: "#fff" }}
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={Filter}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />

          {/* ***************** Redux ToolKit ******************  */}

          <IconButton onClick={toggleDarkModeV2}>
            {istoggleMode?.darkmode ? (
              <Brightness7Icon
                sx={{ color: istoggleMode?.darkmode ? "#fff" : "#000" }}
              />
            ) : (
              <Brightness4Icon
                sx={{ color: istoggleMode?.darkmode ? "#fff" : "#000" }}
              />
            )}
          </IconButton>

          {/* ***************** Redux ToolKit ******************  */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              sx={{ padding: "12px", color: "#fff" }}
              onClick={handleClick}
            >
              <Badge 
              badgeContent={addlist?.length}
               color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              sx={{ color: "#fff" }}
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};

NavBar.propTypes = {
  setUserData: PropTypes.func.isRequired,
  handleDrawerOpen: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  open: PropTypes.array.isRequired,
  darkMode: PropTypes.array.isRequired,
  setDarkMode: PropTypes.array.isRequired,
};

export default NavBar;
