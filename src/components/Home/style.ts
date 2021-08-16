import { StyleSheet } from 'react-native'
import { theme } from '../../common/theme'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: theme.white,
    color: theme.muted,
  },
  navBar:{
    backgroundColor: '#f4511e',
    padding:10,
    paddingTop: 20,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  title: {
    fontSize: 20,
    color: theme.muted,
    paddingBottom: 10,
  },
  feedItem: {
    marginBottom: 10,
    // borderStyle: 'solid',
    // border: '1px solid',
    paddingBottom: 20,
    paddingTop: 10,
    paddingHorizontal: 10,
    // borderBottomColor: theme.muted,
    // borderTopColor: theme.white,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },
  mainColumn: {
    // display: 'flex',
    // flexDirection: 'column',
    // flexBasis: '100%',
    // flex: 2,
    width: '90%',
  },
  commentColumn: {
    // // display: 'flex',
    // flexDirection: 'column',
    // flexBasis: '100%',
    // flex: 1,
    width: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  commentBubble: {
    borderRadius: 40,
    // margin: '40px',
    position: 'relative',
    minHeight: 30,
    minWidth: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color:theme.primary,
    borderColor: theme.primary,
    borderStyle: 'solid',
    borderWidth: 2,
  },

  triRight: {
    position: 'absolute',
    width: 0,
    height: 0,
    left: 20,
    right: 'auto',
    top: 'auto',
    bottom: 0,
    borderColor: theme.primary,
    borderStyle: 'solid',
    borderWidth: 2,
  },

  feedScore: {
    backgroundColor: theme.primary,
    borderRadius: 50,
    padding: 5,
    paddingHorizontal: 8,
    color: theme.white,
  },
  by:{
    fontWeight: 'bold',
    marginEnd: 5

  }
})
