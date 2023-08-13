import {loaderActionReducer} from './reducer';

export const accountActionsCall =
  ({amt_version, amt_code, c_id}: any) =>
  async (dispatch: any) => {
    // const access_token = await AsyncStorage.getItem('access_token');
    dispatch(loaderActionReducer('wecwaec'));

    // try {
    //     return axios.get(`${API_URL}actionManagement/getLinkedActions?amt_code=${amt_code}&amt_version=${amt_version}`, { headers: getcIdHeader(access_token, c_id) }).then((res) => {
    //         dispatch(accountActionsReducer(res?.data));
    //         return res?.data;
    //     }).catch((error) => {
    //         dispatch(errorReducer(error?.data));
    //         dispatch(loaderReducer(false));
    //         return error?.data;
    //     })

    // } catch (error) {
    //     dispatch(errorReducer(error?.data));
    //     dispatch(loaderReducer(false));
    //     return error?.data;
    // }
  };
