import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 32,
  },
  header: {
    marginTop: 32,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  avatar: {
    height: 64,
    width: 64,
    borderRadius: 32,
  },
  greeting: {
    color: "#fff",
    fontSize: 14,
  },
  username: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
