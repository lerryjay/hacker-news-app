import React from 'react'
import { Alert, Image, SafeAreaView, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { connect } from 'react-redux';
import style from '../Register/style';

import Button from '../../common/Button/Button';

import { forgotPassword, resetPassword } from '../../redux/actions/auth';

function ForgotPassword({ navigation, forgotPassword, resetPassword }) {
  const [page, setPage] = React.useState('forgot');
  const [error, setError] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [telephone, setTelephone] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [username, setUsername] = React.useState('');

  const verifyUser = () => {
    if(email.length < 1) return setError('Please enter your email address');
    if(telephone.length < 4) return setError('Please enter your telephone number');
    setLoading(true);
    forgotPassword({email,telephone},(res)=>{
      setLoading(false);
      if(res.status){
        setUsername(res.data.username);
        setPage('reset');
      }
    })
  }

  const resetUser = () => {
    if(password.length < 1) return setError('Please enter a new password');
    if(password.length < 4) return setError('Password cannot be less than 4 characters');
    if(confirmPassword.length < 1) return setError('Re-enter password');
    if(password !== confirmPassword) return setError('Passwords do not match');
    setLoading(true);
    forgotPassword({email,telephone},(res)=>{
      setLoading(false);
      if(res.status){
        Alert.alert('Success', 'Your password has been updated successfully');
        navigation.navigate('Login');
      }
    })
  }

  const forgot = () => <>
    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 100}}>
      <TextInput onChangeText={(value) => {
        setError('')
        setEmail(value)
      }
      } value={email} placeholder="Enter email address" style={style.input} />
      <TextInput onChangeText={(value) => {
        setError('')
        setTelephone(value)
      }
      } value={telephone} placeholder="Enter telephone" style={style.input} />
      <View style={{ marginTop: 30,width:'100%', alignItems:'center', justifyContent: 'center' }}>
        {
          <Text style={style.error}>{error}</Text>
        }
        <Button title="Continue" onPress={verifyUser} loading={ loading } />
      </View>
    </View>
  </>

  const reset = () => <>
    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 100}}>
    <Text>Username:  <Text style={{ fontWeight:'bold'}}>{username}</Text></Text>
      <TextInput onChangeText={(value) => {
        setError('')
        setPassword(value)
      }
      } secureTextEntry={true} value={password} placeholder="New Password" style={style.input} />
      <TextInput onChangeText={(value) => {
        setError('')
        setConfirmPassword(value)
      }
      } secureTextEntry={true} value={confirmPassword} placeholder="Confirm Password" style={style.input} />
      <View style={{ marginTop: 30,width:'100%', alignItems:'center', justifyContent: 'center' }}>
        {
          <Text style={style.error}>{error}</Text>
        }
        <Button title="Continue" onPress={resetUser}  loading={ loading }  />
      </View>
    </View>
  </>

  return (
    <SafeAreaView style={style.container}>
      <View style={style.topArea}>
        <View style={style.imageContainer}>
          <Image source={{ uri: "https://hackernews.api-docs.io/images/stoplight-dude-dark.png" }} style={style.image} />
        </View>
        <Text style={style.pageTitle}>{page === 'forgot'? "Let's recover your account" :  "Reset Password"}</Text>
      </View>
      {
        page === 'forgot' ? forgot() : reset()
      }
      {page === 'forgot' && <View
        style={style.loginArea}
      >
        <Text>Remember password?<Text onPress={() => navigation.navigate('Login')} style={style.link}> Login</Text></Text>
      </View>}
    </SafeAreaView>
  )
}

export default connect(null,{ forgotPassword, resetPassword })(ForgotPassword)
