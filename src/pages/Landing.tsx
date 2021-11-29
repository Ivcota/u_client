import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/Landing.module.css";

const Landing = () => {
  return (
    <div className={styles["landing-page"]}>
      <div className={styles["landing-page__left-side"]}></div>
      <div className={styles["landing-page__right-side"]}>
        <h1 className={styles["landing-page__title"]}>Welcome to U-Contact</h1>
        <p>An interactive way to store and hold your contacts.</p>
        <div className={styles["landing-page__action-holder"]}>
          <button className={styles["landing-page__action-button"]}>
            Sign In With Google
          </button>
          <button className={styles["landing-page__action-button"]}>
            Sign in With Facebook
          </button>
          <div className={styles["landing-page__or-block"]}>
            <hr className={styles["landing-page__our-hr"]} />
            <p>or</p>
            <hr className={styles["landing-page__our-hr"]} />
          </div>
          <Link
            to="/login"
            className={classNames(
              styles["landing-page__action-button"],
              styles["landing-page__action-button--primary"]
            )}
          >
            Login
          </Link>
          <p className={styles["landing-page__fine-print"]}>
            By signing up, you agree to the Terms of Service and Privacy Policy,
            including Cookie Use.
          </p>
          <h2 className={styles["landing-page__subtitle"]}>
            Want to learn more?
          </h2>
          <button
            className={classNames(
              styles["landing-page__action-button"],
              styles["landing-page__action-button--outline"]
            )}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
