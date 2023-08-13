import React from 'react';
import {View} from 'react-native';
import Chat from '../atoms/Chat';

function Chats({chatData}: any) {
  return (
    <View>
      {chatData.map((chat: any) => (
        <View key={chat.name}>
          <Chat chat={chat} />
        </View>
      ))}
    </View>
  );
}

export default Chats;
