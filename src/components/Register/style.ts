import { StyleSheet } from "react-native";
import { theme } from "../../common/theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: theme.white,
    // minHeight: '100vh',
  },
  topArea: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 150,
    marginTop: 50
  },
  pageTitle:{
    fontWeight: 'bold',
    color: theme.primary,
    fontSize:16
  },
  imageContainer:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: theme.primary,
    padding: 5,
    marginBottom: 30,
  },
  image: {
    height: 50,
    width: 50,
    
  },
  formArea:{
    flex: 1,
    alignItems:"center",
    justifyContent: 'center',
    width: '100%',
    
  },
  input: {
    width: '90%',
    padding: 20,
    margin: 10,
    borderRadius: 50,
    backgroundColor: theme.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 10,
  },

  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  error:{
    color: theme.error,
    textAlign:'center',
    marginBottom: 5,
  },
  link: {
    color: theme.primary,
    fontWeight: 'bold',
  },
  loginArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    position: 'absolute',
    bottom: 0,
    width: '90%',
    height: 40,
    padding: 20,
  },
})