import {CHANGE_DATA_LOGIN, REMOVE_DATA_LOGIN} from '../action/authenticateAction';

const initialValue = {
  userDataLogin: [],
};

export default function LoginReducer(state = initialValue, action: any) {
  switch (action.type) {
    case CHANGE_DATA_LOGIN:
      return {
        ...action.payload,
      };
    case REMOVE_DATA_LOGIN:
      return initialValue;
    default:
      return state;
  }
}
