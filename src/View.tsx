import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import { connect, useDispatch, useSelector } from 'react-redux';
import { theme } from './common/theme';
import { logout } from './redux/actions/auth'
import { LOGOUTUSER } from './redux/types/auth';


const Logout = ()=>{
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: LOGOUTUSER,
      payload: {  },
    });
    return () => { }  }, [])
  
  return <></>
}


function View() {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  const loggedIn = useSelector((state: any) => state.auth.loggedIn);

  
  return (
    
    <NavigationContainer>
      {
        !loggedIn ?
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Register" options={{
              headerShown: false
            }} component={Register} />
            <Stack.Screen name="ForgotPassword" options={{
              headerShown: false
            }} component={ForgotPassword} />
            <Stack.Screen options={{
              headerShown: false
            }} name="Login" component={Login} />
          </Stack.Navigator>
          :
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home"
              component={Home}
              options={{
                // headerShown: false,
                title: 'Hacker News',
                headerStyle: {
                  backgroundColor: theme.primary,
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: '500',
                },
              }} />
            <Drawer.Screen name="About" component={Profile}  options={{
                // headerShown: false,
                title:"About Me" ,
                headerStyle: {
                  backgroundColor: theme.primary,
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: '500',
                },
              }} />
            <Drawer.Screen name="Logout" component={Logout}  />
          </Drawer.Navigator>

      }

    </NavigationContainer>

  )
}

export default View
