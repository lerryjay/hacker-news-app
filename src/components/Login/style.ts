import { StyleSheet } from 'react-native'
import { theme } from '../../common/theme'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.white,
    height: '100%',
    position:'relative',
    // paddingBottom: 40
  },
  topArea: {
    borderBottomLeftRadius: 100,
    minHeight: 230,
    position: 'absolute',
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    // backgroundImage: 'linear-gradient(to bottom left, red, #ffba00)',
    backgroundColor: theme.primary,
    width: '100%',
  },
  image:{
    width: 50, height:50, zIndex:10,
  },
  pageTitle:{
    flexDirection: 'row',
    justifyContent:'flex-end',
    marginTop:100,
    minWidth:'90%',
    
  },
  header: {
    fontWeight:'bold',
    color: theme.white,
    fontSize:18,
    paddingRight: 20,
    bottom: 0,
    position:'absolute'
  },
  formArea: {
    marginTop: 120,
    width: '100%',
  },
  input: {
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
  resetPassword: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '90%',
    height: 40,
    padding: 20,
  },
  link: {
    color: theme.primary,
    fontWeight: 'bold',
  },
  registerArea: {
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
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: theme.white,
  },
  loginError:{
    color: theme.error,
    textAlign:'center',
    marginBottom: 5,
  }
})
