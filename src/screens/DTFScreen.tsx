import React from 'react';
import {View, SafeAreaView, Text, StyleSheet, ScrollView} from 'react-native';
import {profilesData} from '../constants/constants';
import NavDrawer from '../molecules/NavDrawer';
import {useSelector} from 'react-redux';
import DTFprofiles from '../molecules/DTF-profiles';

function DTFScreen(props: any): JSX.Element {
  // const loading = useSelector((state: any) => state.loaderReducer.loading);

  // console.log(loading);

  return (
    <SafeAreaView style={styles.fullView}>
      <DTFprofiles profiles={profilesData?.girls} />
      <NavDrawer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fullView: {
    backgroundColor: 'black',
    flex: 1,
  },
});

export default DTFScreen;
