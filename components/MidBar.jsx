import { SiGoogleclassroom } from "react-icons/si";
import { IoClipboardOutline } from "react-icons/io5";
import { CiYoutube } from "react-icons/ci";
import { RiSlideshow2Line } from "react-icons/ri";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlineDocumentScanner } from "react-icons/md";

export const MidBar = () => {
  return (
    <div style={styles.outer}>
      <div style={styles.tags}>
        <SiGoogleclassroom style={styles.allIcons} /> <p> Classroom </p>{" "}
      </div>{" "}
      <div style={styles.tags}>
        <IoClipboardOutline style={styles.allIcons} /> <p> Whiteboard </p>{" "}
      </div>{" "}
      <div style={styles.tags}>
        <CiYoutube style={styles.allIcons} /> <p> Videos </p>{" "}
      </div>{" "}
      <div style={styles.tags}>
        <RiSlideshow2Line style={styles.allIcons} /> <p> Slide Show </p>{" "}
      </div>{" "}
      <div style={styles.tags}>
        <IoDocumentTextOutline style={styles.allIcons} /> <p> Documents </p>{" "}
      </div>{" "}
      <div style={styles.tags}>
        <MdOutlineDocumentScanner style={styles.allIcons} /> <p> Doc.cam </p>{" "}
      </div>{" "}
    </div>
  );
};

const styles = {
  outer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "0.5rem ",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    paddingBottom: "0.5rem",
    height: "5vh",
    marginLeft: "3rem",
    backgroundColor: "#cee2ed",
    borderRadius: 30,
  },
  allIcons: {
    fontSize: "1.5rem",
    color: "#1b99b3",
  },
  tags: {
    display: "flex",
    flexDirection: "row",
    gap: "1rem",
  },
};
