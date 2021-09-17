import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {useDispatch} from 'react-redux';
import {THE_MOVIE_500PX_POSTER_URL} from '../../../constants/defaultUrls';
import {favoriteMovieToggleRequested} from '../../../screens/FavoritiesScreen/redux/actions';
import {hiddenMovieToggleRequested} from '../../../screens/HiddenMoviesScreen/redux/actions';
import {MovieDetailsType} from '../../../screens/SearchScreen/redux/types';
import ButtonWithShadowSmall from '../../atoms/Buttons/ButtonWithShadowSmall';
import DefaultText from '../../atoms/Text/DefaultText/DefaultText';

const styles = StyleSheet.create({
  mainWrapper: {flexDirection: 'row', flex: 1},
  posterWrapper: {
    width: '30%',
  },
  poster: {
    height: '100%',
  },
  descriptionWrapper: {
    width: '70%',
    paddingHorizontal: wp(3),
  },
  titleWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: wp(3),
    height: '25%',
  },
  containerSpace: {
    width: '3%',
  },
});

interface MoviePreviewProps {
  id: MovieDetailsType['id'];
  title: MovieDetailsType['title'];
  overview: MovieDetailsType['overview'];
  year: MovieDetailsType['release_date'];
  vote: MovieDetailsType['vote_average'];
  posterUrl: MovieDetailsType['poster_path'];
  isFavorite: boolean;
  isHidden: boolean;
}

const MoviePreview: React.FunctionComponent<MoviePreviewProps> = ({
  id,
  title,
  overview,
  year,
  vote,
  posterUrl,
  isFavorite,
  isHidden,
}) => {
  const extractedYear = year.slice(0, 4);
  const convertedVote = vote.toString();
  const voteWithZeros =
    convertedVote.length === 1 ? `${convertedVote}.0` : convertedVote;
  const dispatch = useDispatch();
  const posterUri = `${THE_MOVIE_500PX_POSTER_URL}${posterUrl}`;

  const onFavoriteToggle = () => {
    dispatch(favoriteMovieToggleRequested(id));
  };

  const onHiddenToggle = () => {
    dispatch(hiddenMovieToggleRequested(id));
  };

  return (
    <View style={styles.mainWrapper}>
      <View style={styles.posterWrapper}>
        <Image
          source={{
            uri: posterUri,
          }}
          style={styles.poster}
          resizeMode="contain"
        />
      </View>

      <View style={styles.descriptionWrapper}>
        <View style={styles.titleWrapper}>
          <DefaultText
            style={{width: '80%'}}
            s
            fitText={false}
            fontFamilyMedium>
            {title}
          </DefaultText>
          <DefaultText style={{width: '20%'}} isTextAlignCenter s>
            {voteWithZeros}
          </DefaultText>
        </View>

        <DefaultText xs>{extractedYear}</DefaultText>
        <DefaultText xxs2 numberOfLines={3} fitText={false}>
          {overview}
        </DefaultText>

        {/* BUTTONS */}
        <View style={styles.buttonsWrapper}>
          <ButtonWithShadowSmall
            isIcon
            iconName={isHidden ? 'md-eye-off-outline' : 'eye-outline'}
            onPress={onHiddenToggle}
            isDisabled={false}
            iconSize={15}
            percentageWidth={15}
          />
          <View style={styles.containerSpace} />
          <ButtonWithShadowSmall
            isIcon
            iconName={isFavorite ? 'star' : 'star-outline'}
            onPress={onFavoriteToggle}
            isDisabled={false}
            iconSize={15}
            percentageWidth={15}
          />
        </View>
      </View>
    </View>
  );
};

export default MoviePreview;
