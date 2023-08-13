import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  ScrollView,
  Button,
} from 'react-native';
import Posts from '../molecules/Posts';
import {postsData} from '../constants/constants';
import NavDrawer from '../molecules/NavDrawer';
import {useSelector} from 'react-redux';

function HomeScreen(props: any): JSX.Element {
  const loading = useSelector((state: any) => state.loaderReducer.loading);

  const handleJoinRoom = () => {
    props.navigation.navigate('Message', {roomID: '123456'});
  };

  return (
    <SafeAreaView style={styles.fullView}>
      <Button color="#007AFF" onPress={handleJoinRoom} title="Join Room" />
      <Button color="#007AFF" onPress={handleJoinRoom} title="Create Room" />
      <Text>create Room</Text>
      <ScrollView style={styles.fullView}>
        <Posts posts={postsData} />
      </ScrollView>
      <NavDrawer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fullView: {
    backgroundColor: 'black',
    flex: 1,
    padding: 3,
  },
});

export default HomeScreen;
