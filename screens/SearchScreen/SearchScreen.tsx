import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useDispatch, useSelector} from 'react-redux';
import ButtonWithShadowSmall from '../../components/atoms/Buttons/ButtonWithShadowSmall';
import ContainerSpace from '../../components/atoms/Containers/ContainerSpace';
import HorizontalDivider from '../../components/atoms/Dividers/Horizontal/HorizontalDivider';
import {MoviePreview} from '../../components/molecules';
import styled from '../../constants/styled';
import {searchMovieRequested} from './redux/actions';
import Icon from 'react-native-vector-icons/Feather';
import {searchMovieResultSelector} from './redux/selectors';
import {favoriteMoviesSelector} from '../FavoritiesScreen/redux/selectors';
import omit from 'lodash/omit';
import {
  hiddenMoviesSelector,
  isHiddenMoviesGlobalSelector,
} from '../HiddenMoviesScreen/redux/selectors';
import {hiddenMovieToggleGlobal} from '../HiddenMoviesScreen/redux/actions';
import NetInfo from '@react-native-community/netinfo';

const SearchScreen: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const searchedMoviesData = useSelector(searchMovieResultSelector);

  const favoriteMovies = useSelector(favoriteMoviesSelector);
  const favoriteMoviesIds = Object.keys(favoriteMovies);

  const isHiddenMoviesGlobal = useSelector(isHiddenMoviesGlobalSelector);
  const hiddenMoviesIds = useSelector(hiddenMoviesSelector);

  const moviesDataResult = searchedMoviesData?.data?.results || {};

  // Avoid duplicates in search result and favorites list
  const removeFavoritesFromSearchResult = omit(
    moviesDataResult,
    favoriteMoviesIds,
  );

  // Check internet availability
  const [isOffline, setOfflineStatus] = useState(false);
  console.log('🚀 ~ file: SearchScreen.tsx ~ line 52 ~ isOffline', isOffline);

  useEffect(() => {
    const removeNetInfoSubscription = NetInfo.addEventListener(state => {
      const offline = !(state.isConnected && state.isInternetReachable);
      setOfflineStatus(offline);
    });

    return () => removeNetInfoSubscription();
  }, []);

  // Show favorite movies first, then search result
  const pushedFavoriteMoviesArray = [
    ...Object.values(favoriteMovies),
    ...Object.values(removeFavoritesFromSearchResult),
  ];

  const filterHiddenMovies = pushedFavoriteMoviesArray.filter(
    movie => !hiddenMoviesIds.includes(movie.id),
  );

  const withoutHiddenMovies = isHiddenMoviesGlobal
    ? filterHiddenMovies
    : pushedFavoriteMoviesArray;

  const [searchText, setSearchText] = useState('');

  const isSearchTextFilled = searchText.length;

  // Delay with a search request. Not search, if less than 3 symbols
  useEffect(() => {
    if (searchText.length <= 3) return;

    const timerId = setTimeout(
      () => dispatch(searchMovieRequested(searchText)),
      2000,
    );

    return (): void => clearTimeout(timerId);
  }, [searchText, dispatch]);

  const onClearSearchInputHandler = () => {
    setSearchText('');
  };

  const hideMoviesGlobalHandler = () => {
    dispatch(hiddenMovieToggleGlobal());
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.searchWrapper}>
        <View style={styles.searchInput}>
          <TextInput
            value={searchText}
            placeholder="search..."
            style={styles.searchField}
            onChangeText={setSearchText}
          />
          {isSearchTextFilled ? (
            <Pressable
              style={styles.crossButtonWrapper}
              onPress={onClearSearchInputHandler}>
              <Icon
                name="x-circle"
                size={24}
                color={styled.colors.grey50opacity}
              />
            </Pressable>
          ) : (
            <></>
          )}
        </View>
        <ButtonWithShadowSmall
          isIcon
          iconName={isHiddenMoviesGlobal ? 'md-eye-off-outline' : 'eye-outline'}
          onPress={hideMoviesGlobalHandler}
          isDisabled={false}
          percentageWidth={15}
        />
      </View>
      <HorizontalDivider marginVertical={5} />
      <SafeAreaView style={styles.searchResultContainer}>
        <FlatList
          data={withoutHiddenMovies}
          keyExtractor={movie => movie.id}
          renderItem={({
            item: {
              id,
              title,
              overview,
              release_date,
              vote_average,
              poster_path,
            },
          }) => (
            <View
              style={{
                paddingVertical: wp(5),
                borderBottomWidth: 1,
                borderBottomColor: styled.colors.grey5opacity,
              }}>
              <MoviePreview
                id={id}
                title={title}
                overview={overview}
                year={release_date}
                vote={vote_average}
                posterUrl={poster_path}
                isFavorite={favoriteMoviesIds.includes(id.toString())}
                isHidden={hiddenMoviesIds.includes(id)}
              />
            </View>
          )}
          ListFooterComponent={<ContainerSpace mtM marginVertical />}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {flex: 1},
  searchWrapper: {
    marginHorizontal: wp(4),
    marginVertical: wp(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchInput: {
    borderColor: styled.colors.grey20opacity,
    borderWidth: 1,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: hp(5.5),
  },
  searchField: {
    width: '85%',
  },
  crossButtonWrapper: {
    height: '100%',
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchResultContainer: {marginHorizontal: wp(3)},
});

export default SearchScreen;
