export const CHANGE_DATA_LOGIN = 'CHANGE_DATA_LOGIN';
export const REMOVE_DATA_LOGIN = 'REMOVE_DATA_LOGIN';

export const changeDataLogin = (data: any) => ({
  type: CHANGE_DATA_LOGIN,
  payload: data,
});

export const removeDataLogin = () => ({
  type: REMOVE_DATA_LOGIN,
});
