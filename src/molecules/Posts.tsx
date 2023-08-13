import React from 'react';
import {View} from 'react-native';
import Post from '../atoms/Post';

function Posts({posts}: any) {
  return (
    <>
      {posts.map((post: any) => (
        <View key={post.id}>
          <Post post={post} />
        </View>
      ))}
    </>
  );
}

export default Posts;
