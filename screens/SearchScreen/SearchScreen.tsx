import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {searchMovieRequested} from './redux/actions';
import Icon from 'react-native-vector-icons/Feather';
import {searchMovieResultSelector} from './redux/selectors';
import omit from 'lodash/omit';

import ButtonWithShadowSmall from '@components/atoms/Buttons/ButtonWithShadowSmall';
import ContainerSpace from '@components/atoms/Containers/ContainerSpace';
import HorizontalDivider from '@components/atoms/Dividers/Horizontal/HorizontalDivider';
import {MoviePreview} from '@components/molecules';
import styled from '@constants/styled';
import {hiddenMovieToggleGlobal} from '@screens/HiddenMoviesScreen/redux/actions';
import {
  isHiddenMoviesGlobalSelector,
  hiddenMoviesSelector,
} from '@screens/HiddenMoviesScreen/redux/selectors';
import {favoriteMoviesSelector} from '@screens/FavoritiesScreen/redux/selectors';
import {MovieDetailsType} from './redux/types';
import {styles} from './styles';

interface SearchScreenProps {
  isScrollable: boolean;
}

const SearchScreen: React.FunctionComponent<SearchScreenProps> = ({
  isScrollable,
}) => {
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
  ) as MovieDetailsType[];

  // Show favorite movies first, then search result
  const pushedFavoriteMoviesArray = [
    ...Object.values(favoriteMovies),
    ...Object.values(removeFavoritesFromSearchResult),
  ];

  const filterHiddenMovies = pushedFavoriteMoviesArray.filter(
    movie => movie && !hiddenMoviesIds.includes(movie.id),
  );

  const withoutHiddenMovies = isHiddenMoviesGlobal
    ? filterHiddenMovies
    : pushedFavoriteMoviesArray;

  const [searchText, setSearchText] = useState('');

  const isSearchTextFilled = searchText.length;

  // Scroll to top of the list during new search result
  const flatListRef = React.useRef<FlatList<MovieDetailsType>>(null);
  const searchToTop = () => {
    flatListRef.current &&
      flatListRef.current.scrollToOffset({animated: true, offset: 0});
  };

  // Delay with a search request. Not search, if less than 3 symbols
  useEffect(() => {
    if (searchText.length <= 3) return;

    const timerId = setTimeout(() => {
      dispatch(searchMovieRequested(searchText));
      searchToTop();
    }, 1000);

    return (): void => clearTimeout(timerId);
  }, [searchText, dispatch]);

  const onClearSearchInputHandler = () => {
    setSearchText('');
  };

  const hideMoviesGlobalHandler = () => {
    dispatch(hiddenMovieToggleGlobal());
  };

  // Empty search result text
  const isSearchResult = pushedFavoriteMoviesArray.length;
  const emptySearchResultText = searchText.length
    ? 'Movies not found'
    : 'No added movies to favorites';

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
                size={20}
                color={styled.colors.grey30opacity}
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
        {isSearchResult ? (
          <FlatList
            data={withoutHiddenMovies}
            ref={flatListRef}
            scrollEnabled={isScrollable}
            keyboardShouldPersistTaps="handled"
            keyExtractor={movie =>
              movie?.id.toString() || Math.random().toString()
            }
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
              <View style={styles.moviePreviewWrapper}>
                <MoviePreview
                  id={id}
                  title={title}
                  overview={overview}
                  year={release_date || '----'}
                  vote={vote_average}
                  posterUrl={poster_path}
                  isFavorite={favoriteMoviesIds.includes(id.toString())}
                  isHidden={hiddenMoviesIds.includes(id)}
                />
              </View>
            )}
            ListFooterComponent={<ContainerSpace mtM marginVertical />}
          />
        ) : (
          <View style={styles.emptyResultWrapper}>
            <Text>{emptySearchResultText}</Text>
          </View>
        )}
      </SafeAreaView>
    </View>
  );
};

export default SearchScreen;
