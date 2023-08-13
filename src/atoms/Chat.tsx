import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {loveIcon, commentIcon, shareIcon} from '../imageExports';

function Chat({chat}: any) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.chatImage}
        source={{
          uri: chat.profileIconUrl,
        }}
      />
      <View>
        <Text style={styles.name}>{chat.name}</Text>
        <Text style={styles.lastSeen}>Last Seen {chat.lastSeen}</Text>
      </View>
    </View>
  );
}

export default Chat;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center',
  },
  name: {
    color: 'white',
  },
  chatImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginHorizontal: 15,
    // overflow: 'hidden',
  },
  lastSeen: {
    color: 'grey',
  },
});
