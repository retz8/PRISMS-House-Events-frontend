import { StyleSheet } from "react-native";
import {
  fontPercentage,
  horizontalScale,
  verticalScale,
} from "../../helpers/responsiveSize";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FAF9F8",
    width: horizontalScale(91),
    height: verticalScale(33),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    elevation: 10,
  },
  text: {
    fontFamily: "BalooBhaijaan2-Bold",
    fontSize: fontPercentage(15),
    color: "#E54E4E",
  },
});

export default styles;
