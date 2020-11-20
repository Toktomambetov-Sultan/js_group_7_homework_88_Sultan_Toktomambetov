import React, { useState } from "react";
import UserForm from "../../components/UserForm/UserForm";
import LockOpenRoundedIcon from "@material-ui/icons/LockOpenRounded";
import { useDispatch, useSelector } from "react-redux";
import { registration } from "../../store/user/userActions";
import { Box } from "@material-ui/core";

const RegistrationPage = () => {
  const state = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const registrationHandler = (data) => dispatch(registration(data));
  const [currentUser, setCurrentUser] = useState({
    username: "",
    password: "",
  });
  const onChange = (event) => {
    const { value, name } = event.target;
    setCurrentUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    await registrationHandler(currentUser);
    setCurrentUser((prevState) => ({
      ...prevState,
      password: "",
    }));
  };
  return (
    <Box pt={10}>
      <UserForm
        title="Sing up"
        icon={<LockOpenRoundedIcon />}
        error={state.registrationError?.errors}
        user={currentUser}
        color="blue"
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </Box>
  );
};

export default RegistrationPage;
