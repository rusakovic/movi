import React from 'react';
import {View} from 'react-native';
import {SearchScreen} from '@screens';

interface buttonProps {}

const button: React.FunctionComponent<buttonProps> = props => {
  return (
    <View>
      <SearchScreen />
    </View>
  );
};

export default button;
