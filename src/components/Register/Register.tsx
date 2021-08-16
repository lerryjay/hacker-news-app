import React from 'react'
import { Alert, Image, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux';
import Button from '../../common/Button/Button';

import { register } from '../../redux/actions/auth';
import style from './style';

export const Register = ({ register, navigation }) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('')
  const [email, setEmail] = React.useState('');
  const [telephone, setTelephone] = React.useState('');
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false)

  const registerUser = () => {
    if (username.length < 4) return setError('Username must be 4 or more characters');
    if (password.length < 4) return setError('Password must be 4 or more characters');
    if (email.length < 4) return setError('UPlease enter a valid email address');
    if (telephone.length < 4) return setError('Please enter a valid telephone number');
    setLoading(true);
    register({ username, password, email, telephone }, (res) => {
      setLoading(false);
      if (res.status) {
        Alert.alert('Registration successful', 'Your account has been created sucessfully');
        navigation.navigate('Login');
      }
      else setError(res.message);
    })
  }
  return (
    <SafeAreaView style={style.container}>
      <View style={style.topArea}>
        <View style={style.imageContainer}>
          <Image source={{ uri: "https://hackernews.api-docs.io/images/stoplight-dude-dark.png" }} style={style.image} />

        </View>
        <Text style={style.pageTitle}> Register Account </Text>
      </View>
      <View style={style.formArea}>
        <TextInput placeholder="Username"
          style={style.input}
          value={username}
          onChangeText={(value: string) => {
            setError('');
            setUsername(value);
          }
          } />
        <TextInput placeholder="user@example.com"
          style={style.input}
          value={email}
          textContentType="emailAddress"
          keyboardType='email-address'
          onChangeText={(value: string) => {
            setError('');
            setEmail(value);
          }
          } />
        <TextInput placeholder="Phone"
          style={style.input}
          value={telephone}
          textContentType="telephoneNumber"
          keyboardType='phone-pad'
          onChangeText={(value: string) => {
            setError('');
            setTelephone(value);
          }
          } />
        <TextInput placeholder="Password"
          style={style.input}
          value={password}
          secureTextEntry={true}
          textContentType="password"
          // keyboardType='visible-password'
          onChangeText={(value: string) => {
            setError('');
            setPassword(value);
          }
          } />
        <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
          {
             <Text style={style.error}> {error}</Text>
          }
          <Button title={'Create Account'} onPress={registerUser} disabled={loading} loading={loading} />
        </View>

      </View >
      <View
        style={style.loginArea}
      >
        <Text>Already have an account?<Text onPress={() => navigation.navigate('Login')} style={style.link}> Login</Text></Text>
      </View>
    </SafeAreaView >
  )
}

export default connect(null, { register })(Register)
