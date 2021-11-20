import axios from "axios";
import { useFormik } from "formik";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FormCard, PrimaryButton } from "../components/styledCards";
import { useAuthStore } from "../global/authState";
import { LoginRes } from "../global/types";
import { TW3Input } from "./../components/inputs";
import { server } from "./../utils/urls";

const Login = () => {
  // Global Auth Store via Zustand
  const { setAuth, authenticated, username } = useAuthStore();
  const navigate = useNavigate();

  // Check is user is authenticated
  useEffect(() => {
    if (authenticated) {
      navigate("/dashboard");
    }
    // eslint-disable-next-line
  }, []);

  // Making use of Formik for form submission and validation
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ email, password }) => {
      const normalized_email = email.toLowerCase();

      try {
        const res = await axios.post<LoginRes>(server + "auth/login/", {
          username: normalized_email,
          password: password,
        });

        setAuth(res.data.username, res.data.email, res.data.token);
        navigate("/dashboard");
      } catch (error) {
        // Handeling the errors simply. We're just posting the data in an alert
        const errors: any = (error as any).response.data;
        alert(JSON.stringify(errors));
      }
    },
  });

  return (
    <Wrapper>
      <FormCard>
        {!authenticated ? (
          <h1 className="name">U_Contact Login</h1>
        ) : (
          <h1>Hello there {username}</h1>
        )}

        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="email">Email Address</label>
          <TW3Input
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            type="text"
            placeholder="Email"
            autoComplete="off"
          />
          <label htmlFor="password">Password</label>
          <TW3Input
            id="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            type="password"
            placeholder="Password"
            autoComplete="off"
          />
          <p>
            New to UContact? <Link to="/register">Sign up for free here</Link>
          </p>
          <PrimaryButton type="submit">Submit</PrimaryButton>
        </form>
      </FormCard>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export default Login;
