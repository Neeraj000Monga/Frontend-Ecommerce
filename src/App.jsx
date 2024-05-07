import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./components/Details";
import AddProduct from "./components/AddProduct";
import { useEffect, useState } from "react";
import axios from "axios";
import { Box } from "@mui/material";
import Dashboard, {
  AppBar,
  DrawerHeader,
  drawerWidth,
} from "./components/Dashboard";
import NavBar from "./components/NavBar";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useSelector } from "react-redux";

const App = () => {
  const [data, setData] = useState([]);
  // const [addlist, setAddlist] = useState([]);
  // const [addlist, setAddlist] = useState(
  //   JSON.parse(localStorage.getItem("addlist")) || []
  // );
  const [userData, setUserData] = useState([]);
  const [open, setOpen] = useState(false);

  const istoggleMode = useSelector((state) => state.auth);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setData(res.data);
      setUserData(res.data);
    });
  }, []);

  const addlist = useSelector((state) => state.addItem);

  // const addToItem = (item) => {
  //   if (addlist.some((add) => add.id === item.id)) {
  //     setAddlist(addlist.filter((add) => add.id !== item.id));
  //   } else {
  //     setAddlist([...addlist, item]);
  //   }
  // };
  // console.log("addlist", addlist)

  // useEffect(() => {
  //   localStorage.setItem("addlist", JSON.stringify(addlist));
  // }, [addlist]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const theme = useTheme();

  return (
    <Box
      sx={{
        background: istoggleMode?.darkmode ? "#000" : "#fff",
        minHeight: "100vh",
      }}
    >
      <BrowserRouter>
        <Box sx={{ display: "flex" }}>
          <AppBar position="fixed" open={open}>
            <NavBar
              handleDrawerOpen={handleDrawerOpen}
              open={open}
              addlist={addlist}
            />
          </AppBar>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
            variant="persistent"
            anchor="left"
            open={open}
          >
            <DrawerHeader sx={{ justifyContent: "space-between" }}>
              <img src="../images\logo.png" alt="logo" width={60} height={59} />
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
              {["Inbox", "Starred", "Send email", "Drafts"].map(
                (text, index) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                )
              )}
            </List>
            <Divider />
            <List>
              {["All mail", "Trash", "Spam"].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Drawer>
        </Box>
        <DrawerHeader />

        <Routes>
          <Route
            path="/"
            element={
              <Dashboard
                open={open}
                setOpen={setOpen}
                data={data}
                addlist={addlist}
                setData={setData}
                userData={userData}
                setUserData={setUserData}
              />
            }
          />
          <Route path="/details/:userId" element={<Details />} />
          <Route
            path="/AddProduct"
            element={
              <AddProduct
                addlist={addlist}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </Box>
  );
};

export default App;
