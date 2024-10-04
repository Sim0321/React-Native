import { ACTION_CLICKED_FAVORITE } from "../actions/favorite";

export const initialState = {
  favorite: [],
};

export const favoriteListReducer = (state = initialState, action) => {
  if (action.type === ACTION_CLICKED_FAVORITE) {
    const hasItem =
      state.favorite.filter((item) => item === action.clicked).length > 0;

    if (hasItem) {
      return {
        ...state,
        favorite: state.favorite.filter((item) => item !== action.clicked),
      };
    }

    return {
      ...state,
      favorite: state.favorite.concat([action.clicked]),
    };
  }

  return {
    ...state,
  };
};
