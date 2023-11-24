import { IoChevronBack } from "react-icons/io5";
import { FaSquarePhone } from "react-icons/fa6";
import { MdOutlineSupportAgent } from "react-icons/md";
import { MidBar } from "./midBar";
import { VideoTabs } from "./VideoTabs";

export const TopBar = () => {
  return (
    <div>
      <div style={styles.outer}>
        <IoChevronBack style={styles.backButton} />{" "}
        <p style={styles.headText}> Basic Mathematics 101 </p>{" "}
        <div style={styles.right}>
          <FaSquarePhone style={styles.iconCall} /> <p> Call Teacher </p>{" "}
          <MdOutlineSupportAgent style={styles.iconSupport} /> <p> Support </p>{" "}
          <div />
        </div>{" "}
      </div>{" "}
      <MidBar />
      <VideoTabs />
    </div>
  );
};

const styles = {
  outer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    paddingTop: "1rem",
    height: "8vh",
    marginLeft: "3rem",
  },
  backButton: {
    fontSize: "1rem",
    cursor: "pointer",
    backgroundColor: "#cee2ed",
    padding: "0 1rem",
    height: "6vh",
    borderRadius: 12,
    marginRight: "0.5rem",
  },
  headText: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    fontFamily: "sans-serif",
  },
  right: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "60vw",
    alignItems: "center",
    gap: "0.5rem",
    marginRight: "3rem",
  },
  iconCall: {
    color: "green",
    fontSize: "2rem",
    borderRadius: 12,
  },
  iconSupport: {
    fontSize: "2rem",
    color: "brown",
    marginLeft: "2rem",
  },
};
