import {CHANGE_DATA_LOGIN} from '../action/LoginAction';

const initialValue = {
  userDataLogin: [],
};

export default function LoginReducer(state = initialValue, action: any) {
  switch (action.type) {
    case CHANGE_DATA_LOGIN:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
}
