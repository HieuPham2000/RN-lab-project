import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <View 
        style={{
          flexDirection: 'row',
          backgroundColor: '#f3f6fa',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 20,
        }}
      >
        <View style={{ width: 27 }} />
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png'
          }}
          style={{
            flex: 1,
            width: null,
            height: 40
          }}
          resizeMode="contain"
        />

        <Feather name="inbox" size={27} color="black" />
      </View>
      
      <ScrollView>
      {feedData.map( feed => {
        return (
          <View style={styles.feedItem} key={feed.id}>
            <View style={styles.avatarWrapper}>
              <Image
                source={feed.avatar}
                style={styles.avatarImage}
                resizeMode='cover'
              />
              <Text style={styles.posterName}>{feed.name}</Text>
            </View>
          
            <View style={styles.imageWrapper}>
              <Image
                source={feed.image}
                style={styles.imagePoster}
                resizeMode='cover'
              />
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                marginVertical: 10,
                marginHorizontal: 10,
              }}
            >
              <Feather
                name='heart'
                size={27}
                color='black'
                onPress={() => alert("Liked")}
                style={styles.icon}
              />
              <Feather
                name='message-square'
                size={27}
                color='black'
                onPress={() => alert("Sent")}
                style={styles.icon}
              />
              <Feather
                name='share'
                size={27}
                color='black'
                onPress={() => alert("Shared")}
                style={styles.icon}
              />
            </View>

            <View style={styles.line1} />
            <View 
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 10,
              }}
            >
              <AntDesign
                name='heart'
                size={27}
                color='red'
                style={styles.icon}
              />
              <Text>{feed.likeCount} likes</Text>
            </View>
            <View style={styles.line2} />
          </View>

        )
      })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatarWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 7,
    marginHorizontal: 12,
  },
  avatarImage: {
    borderRadius: 23,
    width: 46,
    height: 46,
  },
  posterName: {
    fontSize: 15,
    fontWeight: '500',
    marginLeft: 12,
  },
  imageWrapper: {
    height: 300,
  },
  imagePoster: {
    flex: 1,
    width: null,
    height: null,
  },
  icon: {
    marginHorizontal: 5,
  },
  line1: {
    borderColor: 'gray',
    borderWidth: 0.25,
    marginVertical: 5,
  },
  line2: {
    borderColor: 'black',
    borderWidth: 0.75,
    marginTop: 5,
    marginBottom: 15,
  },
});

const feedData = [
  {
    id: 1,
    name: 'Phương Vy',
    image: require('./assets/1.jpeg'),
    likeCount: 128,
    avatar: require('./assets/avatar1.jpeg')
  },
  {
    id: 2,
    name: 'Phương Quỳnh',
    image: require('./assets/2.jpeg'),
    likeCount: 430,
    avatar: require('./assets/avatar2.jpeg')
  },
  {
    id: 3,
    name: 'Trúc Phương',
    image: require('./assets/3.jpeg'),
    likeCount: 520,
    avatar: require('./assets/avatar3.jpeg')
  },
  {
    id: 4,
    name: 'Mỹ Nhi',
    image: require('./assets/4.jpeg'),
    likeCount: 200,
    avatar: require('./assets/avatar4.jpeg')
  },
];
