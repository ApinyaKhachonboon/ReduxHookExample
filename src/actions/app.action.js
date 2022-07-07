import { APP_ACTION_ADD, APP_ACTION_CLR, APP_ACTION_REM } from "../Constants";

export const setStateToAdd = () => ({
  type: APP_ACTION_ADD,
});

export const setStateToRem = () => ({
  type: APP_ACTION_REM,
});

export const setStateToClr = (payload) => ({
  type: APP_ACTION_CLR,
  payload
});

export const add = () => {
    return dispatch => {
        dispatch(setStateToAdd())
    }
};

export const remove = () => {
    return dispatch => {
        dispatch(setStateToRem())
    }
};

export const clear = (payload) => {
    return dispatch => {
        dispatch(setStateToClr(payload))
    }
};