import { IoVideocamOutline } from "react-icons/io5";
import { CiMicrophoneOn } from "react-icons/ci";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { CiChat1 } from "react-icons/ci";
import { IoExitOutline } from "react-icons/io5";

export const VideoTabs = () => {
  return (
    <div style={styles.outest}>
      <div style={styles.outer}>
        <div style={styles.ImageAll}>
          <img
            src="https://cdn.britannica.com/80/203480-131-ACDB8EC0/Young-student-writing-in-notebook-in-school.jpg"
            alt=""
            style={styles.images}
          />{" "}
          <img
            src="https://clark-blog.imgix.net/2019/05/shutterstock_388591585.jpg"
            alt=""
            style={styles.images}
          />{" "}
        </div>{" "}
        <div style={styles.meetingOperations}>
          <div style={styles.iconShell}>
            <IoVideocamOutline style={styles.allIcons} /> <p> Cam </p>{" "}
          </div>{" "}
          <div style={styles.iconShell}>
            <CiMicrophoneOn style={styles.allIcons} /> <p> Mic </p>{" "}
          </div>{" "}
          <div style={styles.iconShell}>
            <FaRegShareFromSquare style={styles.allIcons} /> <p> Share </p>{" "}
          </div>{" "}
          <div style={styles.iconShell}>
            <CiChat1 style={styles.allIcons} /> <p> Chat </p>{" "}
          </div>{" "}
          <div style={styles.iconShell}>
            <IoExitOutline style={styles.leaveIcon} /> <p> Leave </p>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div>
        <img
          src="https://img.freepik.com/premium-vector/youtube-web-video-player-template_248162-163.jpg"
          alt=""
          style={styles.centerImage}
        />{" "}
      </div>{" "}
    </div>
  );
};

const styles = {
  outer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "white",
    paddingTop: "1rem",
    height: "8vh",
    marginLeft: "3rem",
  },
  images: {
    width: "220px",
    height: "150px",
    borderRadius: 20,
  },
  ImageAll: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    marginTop: "1rem",
  },
  meetingOperations: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "1.5rem",
    marginTop: "2.5rem",
    width: "220px",
  },
  allIcons: {
    fontSize: "1.5rem",
    backgroundColor: "#cee2ed",
    padding: "0.5rem",
    borderRadius: 10,
  },
  iconShell: {
    margin: "0.5rem",
  },
  leaveIcon: {
    fontSize: "1.5rem",
    backgroundColor: "#38c7c2",
    padding: "0.5rem",
    borderRadius: 10,
  },
  outest: {
    display: "flex",
  },
  centerImage: {
    marginLeft: "2rem",
    marginTop: "2rem",
    height: "550px",
    width: "1000px",
  },
};
