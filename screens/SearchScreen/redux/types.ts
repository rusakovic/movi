export enum ActionType {
  SearchMovieRequested = 'SearchMovieRequested',
  SearchMovieSucceeded = 'SearchMovieSucceeded',
  SearchMovieFailed = 'SearchMovieFailed',
}

export type MovieDetailsType = {
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type MoviesCollection = {
  [key: number]: MovieDetailsType;
};

export type SearchMovieDataType = {
  page: number;
  results: MoviesCollection;
  total_pages: number;
  total_results: number;
};

export type SearchMovieResultInitialStateType = {
  isLoading: boolean;
  isFailed: boolean;
  data: SearchMovieDataType | null;
  errorMessage: null | string;
};

// SEARCH MOVIE
export type SearchMovieRequestedAction = {
  type: ActionType.SearchMovieRequested;
  searchInput: string;
};

export type SearchMovieSucceededAction = {
  type: ActionType.SearchMovieSucceeded;
  data: SearchMovieDataType;
};

export type SearchMovieFailedAction = {
  type: ActionType.SearchMovieFailed;
  error: string;
};

export type Action =
  // SEARCH MOVIE
  | SearchMovieRequestedAction
  | SearchMovieSucceededAction
  | SearchMovieFailedAction;
