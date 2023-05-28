import { StyleSheet } from "react-native";
import { verticalScale } from "../../helpers/responsiveSize";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F4F3",
  },

  baseUserInfo: {
    height: verticalScale(200),
    width: "100%",
  },

  detailedUser: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },

  username: {
    // margins
    // marginTop: '34.48%',
    // marginLeft:'28.27%',
    fontSize: 33,
    // fontsize: fontPercentage(33), // 33px is the exact font size on the Figma file    fontWeight: "bold",
    fontFamily: "BalooBhaijaan2-Bold",
    color: "#4E3535",
  },
  role: {
    fontFamily: "BalooBhaijaan2-Bold",
    fontWeight: "bold",
    fontSize: 20,
    color: "#504545CC",
  },
  profilePicture: {
    // marginTop: '14.99%',
    width: 125,
    height: 125,
    borderRadius: 125 / 2,
    // alignItems: 'center'
  },
  info: {
    // marginTop: '34.48%',
    width: "100%",
    alignItems: "center",
  },
  infocard: {
    width: 315,
    height: 164,
    borderRadius: 20,
    backgroundColor: "white",
  },
  textContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 24,
  },
  titleText: {
    fontFamily: "BalooBhaijaan2-Bold",
    fontWeight: "bold",
    fontSize: 16,
    color: "#4E3535",
    marginLeft: 20,
  },
  normalText: {
    fontFamily: "BalooBhaijaan2-Bold",
    fontWeight: "bold",
    fontSize: 14,
    color: "#504545A6",
  },
  line: {
    width: 315,
    height: 1,
    // marginTop: 5,
    // flex: 1,
    // alignItems: "center",
    color: "#4E353540",
  },
  bar: {
    borderColor: "#504545A6",
    borderWidth: 1,
    borderRadius: 1,
    marginHorizontal: 20,
    opacity: 0.7,
    // alignItems: 'center'
  },
});

export default styles;
