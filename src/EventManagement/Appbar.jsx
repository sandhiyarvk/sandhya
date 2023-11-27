import * as React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from "@mui/material";
import { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import HomeIcon from "@mui/icons-material/Home";
const pages = [];
export default function Appbar() {
  const { user, dispatch } = useContext(AuthContext);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "Orange",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              fontSize: 35,
              color: "DeepSkyBlue",
            }}
          >
            EventsHub!
          </Typography>
          <Link to="/home">
            <HomeIcon style={{ color: "black" }}> </HomeIcon>
          </Link>
          &emsp;
          <CustomLink
            to="/about"
            style={{ textDecoration: "none", color: "black" }}
          >
            ABOUT
          </CustomLink>
          &emsp;
          <CustomLink
            to="/packages"
            style={{ textDecoration: "none", color: "black" }}
          >
            PACKAGES
          </CustomLink>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              style={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          {user === null ? (
            <Button
              variant="outlined"
              style={{
                backgroundColor: "GhostWhite",
                borderColor: "GhostWhite",
              }}
            >
              <nav>
                <CustomLink
                  to="/login"
                  style={{ textDecoration: "none", color: "LightSeaGreen" }}
                >
                  LOGIN
                </CustomLink>
              </nav>
            </Button>
          ) : (
            <>
              <Typography variant="h4" color={"rose"}>
                {user.name}
              </Typography>
              &emsp;
              <Button
                style={{
                  color: "black",
                  backgroundColor: "GhostWhite",
                  fontWeight: 700,
                }}
                color="inherit"
                onClick={() => dispatch({ type: "LOGOUT" })}
              >
                <nav>
                  <CustomLink
                    to="/Logout"
                    style={{ textDecoration: "none", color: "LightSeaGreen" }}
                  >
                    LOGOUT
                  </CustomLink>
                </nav>
              </Button>
            </>
          )}
          {!user && (
            <Button
              style={{
                backgroundColor: "LightSeaGreen",
                className: "hash",
              }}
            >
              <nav>
                <CustomLink
                  to="/signup"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  SIGN UP
                </CustomLink>
              </nav>
            </Button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
function CustomLink({ to, children, ...props }) {
  return (
    <Link to={to} {...props}>
      {children}
    </Link>
  );
}
//export default ;