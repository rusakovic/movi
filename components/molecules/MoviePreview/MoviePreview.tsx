import ButtonWithShadowSmall from '@components/atoms/Buttons/ButtonWithShadowSmall';
import DefaultText from '@components/atoms/Text/DefaultText/DefaultText';
import {THE_MOVIE_500PX_POSTER_URL} from '@constants/defaultUrls';
import React, {useState} from 'react';
import {Image, Modal, Pressable, StyleSheet, View} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {useDispatch} from 'react-redux';
import {favoriteMovieToggleRequested} from '@screens/FavoritiesScreen/redux/actions';
import {hiddenMovieToggleRequested} from '@screens/HiddenMoviesScreen/redux/actions';
import {MovieDetailsType} from '@screens/SearchScreen/redux/types';

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

  const [isPreviewOpened, setIsPreviewOpened] = useState(false);
  const onFavoriteToggle = () => {
    dispatch(favoriteMovieToggleRequested(id));
  };

  const onHiddenToggle = () => {
    dispatch(hiddenMovieToggleRequested(id));
  };

  const showPreviewPosterToggle = () => {
    setIsPreviewOpened(prevState => !prevState);
  };

  return (
    <View style={styles.mainWrapper}>
      <View style={styles.posterWrapper}>
        <Pressable onPress={showPreviewPosterToggle}>
          <Image
            source={{
              uri: posterUri,
            }}
            style={styles.poster}
            resizeMode="contain"
          />
        </Pressable>

        <Modal visible={isPreviewOpened} transparent={true}>
          <ImageViewer
            imageUrls={[{url: posterUri}]}
            onCancel={showPreviewPosterToggle}
            enableSwipeDown
            renderIndicator={() => <></>}
            backgroundColor="rgba(0,0,0,0.8)"
            saveToLocalByLongPress={false}
            onClick={showPreviewPosterToggle}
            swipeDownThreshold={80}
            useNativeDriver
          />
        </Modal>
      </View>

      <View style={styles.descriptionWrapper}>
        <Pressable onPress={showPreviewPosterToggle}>
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
        </Pressable>

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
