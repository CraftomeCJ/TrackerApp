import {
   StyleSheet,
   Text,
   View,
   Button
 } from 'react-native';
import React from 'react';

const TrackListScreen = ({navigation}: {navigation: any}) => {

  return (

    <View>

      <Text
        style={{ fontSize: 48 }}>
        TrackListScreen
      </Text>

      <Button
        title="Go to Track Detail"
        onPress={() => navigation.navigate('TrackDetail')}
      />

    </View>
  );
};

export default TrackListScreen;

const styles = StyleSheet.create({});
