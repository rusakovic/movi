import {BlurView} from '@react-native-community/blur';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import DefaultText from '../../components/atoms/Text/DefaultText/DefaultText';
import styled from '../../constants/styled';
import SearchScreen from '../SearchScreen';
import Icon from 'react-native-vector-icons/Feather';
import NetInfo from '@react-native-community/netinfo';
import ContainerSpace from '../../components/atoms/Containers/ContainerSpace';

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
    <View
      style={{
        flex: 1,
      }}>
      <SearchScreen isScrollable={!isOffline} />
      {isOffline ? (
        <>
          <BlurView
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            }}
            blurType="dark"
            blurAmount={10}
            overlayColor="rgba(0,0,0,0.8)"
          />
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              height: '100%',
              width: '100%',
            }}>
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
    </View>
  );
};

export default Navigator;
