import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {Text, View} from 'react-native-ui-lib';

// import helpers from '../../../utils/helpers';
import {colors} from '../../../config/styles';

const AboutMeTags = ({tags}) => {
  let loading = false;

  const _renderItem = ({item, index}) => {
    return (
      <View style={styles.tag}>
        <Text bold style={styles.tagText} mLeft={10}>
          {item}
        </Text>
      </View>
    );
  };

  // const _getKey = (item) => {
  //   //TODO: add loading
  //   return helpers.generateShortId();
  // };

  return (
    <FlatList
      data={loading ? ['', '', ''] : tags}
      // keyExtractor={_getKey}
      renderItem={_renderItem}
      contentContainerStyle={styles.container}
      style={styles.list}
    />
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  list: {
    marginTop: 20,
    alignSelf: 'flex-start',
    flexWrap: 'wrap',
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
    borderColor: colors.gray,
    borderWidth: 1,
    marginRight: 10,
    marginBottom: 20,
  },
  tagText:{
    textShadowColor: colors.darkGrey,
    color: colors.darkGrey,
    fontWeight: 'bold',
  }
});

export default AboutMeTags;
