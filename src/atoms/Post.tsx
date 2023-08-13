import React, {useEffect, useState} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {loveIcon, commentIcon, shareIcon} from '../imageExports';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

function Post({post}: any) {
  // const {width, height} = Image.resolveAssetSource(post?.image_url);
  const [imageHeight, setImageHeight] = useState(0);

  useEffect(() => {
    if (post?.image_url) {
      Image.getSize(post.image_url, (width, height) => {
        const ratio = SCREEN_WIDTH / width;
        // Set the image height and width dynamically
        // setImageHeight(ratio * 362);
        setImageHeight(height);
      });
    }
  }, [post?.image_url]);
  return (
    <View style={styles.containerpost}>
      <View style={styles.container}>
        <View style={styles.userTag}>
          <Text style={styles.name}>{post?.user}</Text>
        </View>
        <Image
          style={[styles.postImage, {height: 500}]}
          source={{
            uri: post.image_url,
          }}
        />
        <Text style={styles.desc}>{post?.description}</Text>
      </View>
      <View style={{flexDirection: 'row', paddingHorizontal: 10}}>
        <Image style={styles.actionIcon} source={loveIcon} />
        <Image style={styles.actionIcon} source={commentIcon} />
        <Image style={styles.actionIcon} source={shareIcon} />
        {/* <Image
          style={styles.postImage}
          source={{
            uri: post.image_url,
          }}
        />
        <Image
          style={styles.postImage}
          source={{
            uri: post.image_url,
          }}
        /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    borderColor: 'white',
  },
  desc: {
    color: 'white',
    width: '80%',
  },
  postImage: {
    width: '100%',
    // height: 400,
    resizeMode: 'contain',
  },
  name: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  containerpost: {
    marginBottom: 50,
  },
  userTag: {
    // backgroundColor: 'red',
    backgroundColor: 'rgba(42, 42, 43, 0.2)',
    textAlignVertical: 'center',
    width: '100%',
    height: 40,
  },
  actionIcon: {
    height: 20,
    width: 20,
    resizeMode: 'stretch',
    marginRight: 20,
    marginTop: 20,
  },
});

export default Post;
