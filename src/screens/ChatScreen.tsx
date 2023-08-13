import React from 'react';
import {View, SafeAreaView, Text, StyleSheet, ScrollView} from 'react-native';
import {chatData} from '../constants/constants';
import NavDrawer from '../molecules/NavDrawer';
import {useSelector} from 'react-redux';
import Chats from '../molecules/Chats';

function HomeScreen(props: any): JSX.Element {
  const loading = useSelector((state: any) => state.loaderReducer.loading);

  return (
    <SafeAreaView style={styles.fullView}>
      <Text style={styles.heading}>Messages</Text>
      <ScrollView>
        <Chats chatData={chatData} />
      </ScrollView>
      <NavDrawer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fullView: {
    backgroundColor: 'black',
    flex: 1,
  },
  heading: {
    color: 'white',
    fontSize: 20,
    marginVertical: 20,
    textAlign: 'center',
  },
});

export default HomeScreen;
