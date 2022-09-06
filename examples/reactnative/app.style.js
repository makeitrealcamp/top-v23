import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fontText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    fontSize: 20,
  }
});

export default styles;
