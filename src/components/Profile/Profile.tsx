import React, { useCallback } from 'react'
import { Image, ImageBackground, Linking, Pressable, StyleSheet, Text, View } from 'react-native'
import { theme } from '../../common/theme'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';

function Profile() {
  const [bioShowAll, setBioShowAll] = React.useState(false)
  const profileInfo = {
    name: 'Dominic Olajire E.',
    role: 'Software Engineer',
    email: 'lerryjay45@gmail.com',
    telephone: '+2348182886545',
    bio: '',
    linkedInUrl: 'https://www.linkedin.com/in/olajire-dominic-38b976101/',
    githubUrl: 'https://www.github.com/lerryjay',
    whatsappUrl: 'https://www.wa.me/2348182886545',
  }
  const OpenURLButton = ({ url, name, color }) => {
    const handlePress = useCallback(async () => {
      const supported = await Linking.canOpenURL(url);
      if (supported) {

        await Linking.openURL(url);
      }
    }, [url]);

    return <Icon name={name} size={40} color={color} onPress={handlePress}> </Icon>
  };

  return (
    <ScrollView>
      <View style={style.topArea}>
        <ImageBackground source={require('./bg.png')} resizeMode="cover" style={{ width: '100%', 'height':150}}>
        </ImageBackground>
      </View>
      <View style={style.card}>
        <View style={style.imageContainer}>
          <Image source={require('./me.png')} style={style.image} />
        </View>
        <View style={style.nameArea}>
          <Text style={style.name} >
            {profileInfo.name}
          </Text>
          <Text style={style.label}>{profileInfo.role}</Text>
        </View>
        <View>
          <Text style={style.header}>Contact Information</Text>
          <View style={[style.profileItem]}>
            <Text style={style.label}>Email</Text>
            <Text style={style.itemInfo}>{profileInfo.email}</Text>
          </View>
          <View style={style.profileItem}>
            <Text style={style.label}>Phone</Text>
            <Text style={style.itemInfo}>{profileInfo.telephone}</Text>
          </View>
          <Text style={style.header}>Bio</Text>
          <View style={[style.bioInfo]}>
            <Text style={style.itemInfo}>
              Olajire E. Dominic is a full stack software developer with proficiency writing react and angular on the front end. Skilled using Native php on the backend and can adapt to any public frameworks ( Laravel, code igniter etc). He also very proficient writing node JS as well as mobile applications using flutter, react native and ionic.
            </Text>
            {
              bioShowAll && <>
                <Text style={style.itemInfo}>
                  His experience and understanding of programming gives him the confidence that he can write/ adapt to any programming language as they are nothing but tools.
                </Text>
                <Text style={style.itemInfo}>
                  He has experience developing applications from enterprise level applications such as CRM systems, Accounting systems as wells as ERP to general web applications such as e-commerce and custom softwares and websites. He can also fit into any fintec team because he had the opportunity to previously be lead on a team working on a fintec application.
                </Text>
                <Text style={style.itemInfo}>
                  He is infact a team player and values the ideals and opinion of every member of his team
                </Text>
              </>}
            <View >
              <Pressable style={style.bioLinkArea} onPress={() => setBioShowAll(!bioShowAll)} ><Text style={style.bioLink}>{!bioShowAll ? 'Read more' : 'Show less'}</Text></Pressable>
            </View>
          </View>
        </View>
        <View>
          <Text style={style.header}>Social Media</Text>
        </View>
        <View style={[style.profileItem, { paddingHorizontal: 30 }]}>
          <OpenURLButton url={profileInfo.githubUrl} name="github" color="#000" />
          <OpenURLButton url={profileInfo.linkedInUrl} name="linkedin" color="#378fe9" />
          <OpenURLButton url={profileInfo.whatsappUrl} name="whatsapp" color="#15f30f" />
        </View>
      </View>
    </ScrollView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    height: '100%',
    padding: 0,
    top:0,
    backgroundColor: theme.background
  },
  topArea: {
    marginTop: 0,
    backgroundColor: "#000000c0"
  },
  card: {
    // position: 'absolute',
    // top: 150,
    height: '85%',
    backgroundColor: theme.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  imageContainer: {
    borderRadius: 50,
    height: 100,
    width: 100,
    position: 'absolute',
    backgroundColor: theme.muted,
    top: -40,
    left: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  nameArea: {
    marginLeft: 140,
    padding: 10
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    textTransform: 'uppercase'
  },
  label: {
    color: theme.muted,
    marginBottom: 5,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 16,
    padding: 10,
    marginTop: 10,
  },
  profileItem: {
    // flex: 1,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
  },
  bioInfo: {
    padding: 10,
  },
  bioLinkArea: {
    textAlign: 'center',
    justifyContent:'center',
    alignItems:'center',
    paddingVertical: 10,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 10,
  },
  bioLink:{
    color: theme.primary
  },
  itemInfo: {
    fontSize: 15,
    margin: 5,
    textAlign: 'justify'
  }
})

export default Profile
