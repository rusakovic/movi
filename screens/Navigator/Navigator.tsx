import {BlurView} from '@react-native-community/blur';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, SafeAreaView, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import NetInfo from '@react-native-community/netinfo';
import ContainerSpace from '@components/atoms/Containers/ContainerSpace';
import {SearchScreen} from '@screens';
import styled from '@constants/styled';
import DefaultText from '@components/atoms/Text/DefaultText/DefaultText';
import {styles} from './styles';

const Navigator: React.FunctionComponent = () => {
  // Check internet availability
  const [isOffline, setOfflineStatus] = useState(false);

  useEffect(() => {
    const removeNetInfoSubscription = NetInfo.addEventListener(state => {
      const offline = !(state.isConnected && state.isInternetReachable);
      setOfflineStatus(offline);
    });

    return () => removeNetInfoSubscription();
  }, []);

  return (
    <SafeAreaView style={styles.safeAreaWrapper}>
      <SearchScreen isScrollable={!isOffline} />
      {isOffline ? (
        <>
          <BlurView
            style={styles.blurredWrapper}
            blurType="dark"
            blurAmount={10}
            overlayColor={styled.colors.grey80opacity}
          />
          <View style={styles.noInternetTextWrapper}>
            <Icon name="wifi-off" size={35} color={styled.colors.white.white} />
            <ContainerSpace mtXXS />
            <DefaultText fontColor={styled.colors.white.white} fontFamilyLight>
              Please, check internet connection
            </DefaultText>
            <ContainerSpace mtXXS />
            <ActivityIndicator />
          </View>
        </>
      ) : (
        <></>
      )}
    </SafeAreaView>
  );
};

export default Navigator;
