import _ from 'lodash';
import { FETCH_POSTITS, POSTIT_POSTED, UPVOTE_POST, DOWNVOTE_POST} from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_POSTITS: {
      return action.payload;
    }
    case UPVOTE_POST: {
      const copiedState = state.slice(0);

      return copiedState;
    }
    case DOWNVOTE_POST: {
      const copiedState = state.slice(0);

      return copiedState;
    }
    case POSTIT_POSTED: {
      const copiedState = state.slice(0);
      copiedState.push(action.payload);
      return copiedState;
    }
    default:
      return state;
  }
}