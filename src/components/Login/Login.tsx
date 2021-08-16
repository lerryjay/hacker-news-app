import React from 'react'
import { Text, TextInput, View, Image  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import style from './style';

import { login } from '../../redux/actions/auth';
import { connect } from 'react-redux';
import Button from '../../common/Button/Button';
import { AuthResponse } from '../../common/Models/Auth';

function Login({ login, navigation }) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('')

  const loginUser = () => {
    if(username.length < 1 || password.length < 1) return;
    // setLoading(true);
    login({ username, password }, (res: AuthResponse) => {
      setLoading(false);
      if (!res.status) setError(res.message);
    });
  }

  return (
    <SafeAreaView style={style.container}>
      <View style={style.topArea}>
        <Image source={{ uri: "https://hackernews.api-docs.io/images/stoplight-dude-light.png" }} style={style.image} />
      </View>
      <View style={style.pageTitle}>
        <Text style={ style.header }>Login</Text>
      </View>
      <View style={style.formArea}>
        <TextInput
          style={style.input}
          placeholder={'Username'}
          value={username}
          onChangeText={(text) => { setError(''); setUsername(text) }}
        />
        <TextInput
          placeholder={'Password'}
          style={style.input}
          value={password}
          secureTextEntry={true}
          onChangeText={(text) => { setError(''); setPassword(text) }}
        />
      </View>
      <View style={style.resetPassword}>
        <Text style={style.link} onPress={()=>navigation.navigate('ForgotPassword')}>Forgot password?</Text>
      </View>
       <View style={{ margin: 30, width: '100%', alignItems:'center',justifyContent:'center' }}>
          {<Text style={ style.loginError }> { error }</Text>}
        <Button title={'Login'} loading={loading} onPress={loginUser} disabled={loading} />
      </View> 
      <View style={style.registerArea}>
        <Text>Don't have an account ? <Text onPress={()=>navigation.navigate('Register')} style={style.link}>Register</Text></Text>
      </View>
    </SafeAreaView>
  )
}

export default connect(null, { login })(Login)
