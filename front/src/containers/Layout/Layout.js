import React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { logOut } from "../../store/user/userActions";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  link: {
    fontSize: "22px",
    color: "white",
    textDecoration: "none",
    padding: "10px",
    margin: "0 15px",
    "&.active": {
      color: "lightgreen",
    },
  },
  secondaryLink: {
    fontSize: "14px",
    padding: "3px 6px",
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();

  const state = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const logOutHandler = () => {
    dispatch(logOut());
  };

  const isToken = (
    <>
      <NavLink className={classes.link} to="/add_post" exact>
        add new post
      </NavLink>
      <Button
        className={classes.secondaryLink}
        variant="outlined"
        color="secondary"
        onClick={logOutHandler}
      >
        Log out
      </Button>
    </>
  );

  const isNotToken = (
    <>
      <NavLink className={classes.link} to="/register" exact>
        Register
      </NavLink>
      <NavLink className={classes.link} to="/login" exact>
        Login
      </NavLink>
    </>
  );

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Container>
            <Grid container justify="space-between" alignItems="center">
              <NavLink to="/posts" className={classes.link} exact>
                <Typography variant="h4">Forum</Typography>
              </NavLink>
              {state.user?.token && (
                <Typography variant="h6">Hello, {state.user.username}!</Typography>
              )}
              <div>{state.user?.token ? isToken : isNotToken}</div>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>

      <Box component="main" paddingTop="5px">
        <Container>{children}</Container>
      </Box>
    </div>
  );
};

export default Layout;
