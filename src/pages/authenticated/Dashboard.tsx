import Navbar from "../../components/Navbar";
import styles from "../styles/Dashboard.module.css";

// I want to create a custom hook to check login persistance

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <Navbar />
      <div>
        <div className={styles.dashboard__instruction__holder}>
          <h1 className={styles.dashboard__title}>
            Welcome name to your dashboard!
          </h1>
          <p className={styles["dashboard__instructional-text"]}>
            Feel free to add and remove contacts here.
          </p>
        </div>
        <div className={styles["dashboard__table-holder"]}>
          <table>
            <thead>
              <th>
                <td>Name</td>
              </th>
            </thead>
            <tbody>
              <tr>
                <td>Iverson Diles</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
