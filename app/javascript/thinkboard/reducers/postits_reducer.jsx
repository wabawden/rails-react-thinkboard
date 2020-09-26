import { FETCH_POSTITS, POSTIT_POSTED} from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_POSTITS: {
      return action.payload;
    }
    case POSTIT_POSTED: {
      const copiedState = state.slice(0);
      copiedState.unshift(action.payload);
      return copiedState;
    }
    default:
      return state;
  }
}