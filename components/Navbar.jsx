import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegBell } from "react-icons/fa";
import { TfiTimer } from "react-icons/tfi";
import { BiTask } from "react-icons/bi";
import { GoEye } from "react-icons/go";
import { FaUserFriends } from "react-icons/fa";
import { FaChartSimple } from "react-icons/fa6";
import { FaFaceSmileWink } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { TopBar } from "./TopBar";

export const Navbar = () => {
  return (
    <div style={styles.outest}>
      <div style={styles.outer}>
        <div style={styles.navbar}>
          <FaReact style={styles.react} />{" "}
          <GiHamburgerMenu style={styles.all} />{" "}
          <FaRegBell style={styles.all} /> <TfiTimer style={styles.all} />
          <BiTask style={styles.all} /> <GoEye style={styles.all} />
          <FaUserFriends style={styles.all} />{" "}
          <FaChartSimple style={styles.all} />{" "}
        </div>{" "}
        <FaFaceSmileWink style={styles.profile} />{" "}
      </div>{" "}
      <TopBar />
    </div>
  );
};

const styles = {
  outest: {
    display: "flex",
    flexDirection: "row",
  },
  navbar: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "2.5rem",
    paddingTop: "2rem",
  },
  outer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "3vw",
    backgroundColor: "#cee2ed",
    padding: "0 1rem",
    height: "100vh",
  },
  react: {
    fontSize: "2rem",
    color: "#2b7bcc",
  },
  all: {
    fontSize: "20px",
  },
  profile: {
    fontSize: "3rem",
    color: "#1b99b3",
    paddingBottom: "4rem",
  },
};
