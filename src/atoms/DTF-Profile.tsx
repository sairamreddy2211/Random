import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  Image,
  PanResponder,
  StyleSheet,
  Text,
  View,
} from 'react-native';
const dimensions = Dimensions.get('window');

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

function DTFProfile({
  profile,
  index,
  currentIndex,
  nextCardOpacity,
  nextCardScale,
  setNextCardOpacity,
  setNextCardScale,
  setCurrentIndex,
  handleParametersUpdate,
}: any) {
  let position: any = useRef(new Animated.ValueXY()).current;
  const [rotate, setRotate]: any = useState('0deg');
  const [likeOpacity, setLikeOpacity]: any = useState(0);
  const [nopeOpacity, setNopeOpacity]: any = useState(0);
  // const [nextCardOpacity, setNextCardOpacity]: any = useState(0);
  // const [nextCardScale, setNextCardScale]: any = useState(0.8);
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gestureState) => {
        Animated.event([null, {dx: position.x, dy: position.y}], {
          useNativeDriver: false,
        })(evt, gestureState);
        const rotate = position.x.interpolate({
          inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
          outputRange: ['-10deg', '0deg', '10deg'],
          extrapolate: 'clamp',
        });
        setRotate(rotate);

        const likeOpacity = position.x.interpolate({
          inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
          outputRange: [0, 0, 1],
          extrapolate: 'clamp',
        });
        setLikeOpacity(likeOpacity);

        const NopeOpacity = position.x.interpolate({
          inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
          outputRange: [1, 0, 0],
          extrapolate: 'clamp',
        });
        setNopeOpacity(NopeOpacity);

        const nextCrdOpacity = position.x.interpolate({
          inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
          outputRange: [1, 0, 1],
          extrapolate: 'clamp',
        });

        setNextCardOpacity(nextCrdOpacity);
        // handleParametersUpdate({
        //   type: 'nextCardOpacity',
        //   value: nextCrdOpacity,
        // });

        const nextCrdScale = position.x.interpolate({
          inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
          outputRange: [1, 0.8, 1],
          extrapolate: 'clamp',
        });

        setNextCardScale(nextCrdScale);
        // handleParametersUpdate({type: 'nextCardScale', value: nextCrdScale});
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx > 120) {
          Animated.timing(position, {
            toValue: {x: SCREEN_WIDTH + 100, y: gestureState.dy},
            useNativeDriver: true,
          }).start(() => {
            // handleParametersUpdate({
            //   type: 'currentIndex',
            //   value: currentIndex + 1,
            // });

            setCurrentIndex(index + 1);
          });
        } else if (gestureState.dx < -120) {
          Animated.timing(position, {
            toValue: {x: -SCREEN_WIDTH - 100, y: gestureState.dy},
            useNativeDriver: true,
          }).start(() => {
            // handleParametersUpdate({
            //   type: 'currentIndex',
            //   value: currentIndex + 1,
            // });
            setCurrentIndex(index + 1);
          });
        } else {
          Animated.spring(position, {
            toValue: {x: 0, y: 0},
            friction: 4,
            useNativeDriver: true,
          }).start();
        }
      },
    }),
  ).current;

  return (
    <>
      {index < currentIndex ? null : index == currentIndex ? (
        <Animated.View
          {...panResponder.panHandlers}
          style={[
            {
              position: 'absolute',
              transform: [
                {rotate: rotate},
                ...position.getTranslateTransform(),
              ],
              height: SCREEN_HEIGHT - 120,
              width: SCREEN_WIDTH,
              padding: 10,
              flex: 1,
            },
          ]}>
          <Animated.View
            style={[
              {
                opacity: likeOpacity,
                transform: [{rotate: '-30deg'}],
                position: 'absolute',
                top: 50,
                left: 40,
                zIndex: 1000,
              },
            ]}>
            <Text
              style={{
                borderWidth: 1,
                borderColor: 'green',
                color: 'green',
                fontSize: 32,
                fontWeight: '800',
                padding: 10,
              }}>
              LIKE
            </Text>
          </Animated.View>
          <Animated.View
            style={[
              {
                opacity: nopeOpacity,
                transform: [{rotate: '-30deg'}],
                position: 'absolute',
                top: 50,
                right: 40,
                zIndex: 1000,
              },
            ]}>
            <Text
              style={{
                borderWidth: 1,
                borderColor: 'red',
                color: 'red',
                fontSize: 32,
                fontWeight: '800',
                padding: 10,
              }}>
              NOPE
            </Text>
          </Animated.View>
          <Image style={styles.chatImage} source={profile.imageurl} />
        </Animated.View>
      ) : (
        <Animated.View
          // {...panResponder.panHandlers}
          style={[
            {
              opacity: nextCardOpacity,
              position: 'absolute',
              transform: [
                // {rotate: rotate},
                {scale: nextCardScale},
                // ...position.getTranslateTransform(),
              ],
              height: SCREEN_HEIGHT - 120,
              width: SCREEN_WIDTH,
              padding: 10,
              flex: 1,
            },
          ]}>
          <Image style={styles.chatImage} source={profile.imageurl} />
        </Animated.View>
      )}
    </>
  );
}

export default DTFProfile;

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    // marginBottom: 15,
    // alignItems: 'center',
  },
  name: {
    color: 'white',
  },
  action: {
    borderWidth: 1,
    position: 'absolute',
    fontSize: 32,
    fontWeight: '800',
    padding: 10,
    zIndex: 100,
    top: 50,
  },
  chatImage: {
    flex: 1,
    borderRadius: 20,
    resizeMode: 'cover',
    height: null,
    width: null,
  },
  lastSeen: {
    color: 'grey',
  },
});
