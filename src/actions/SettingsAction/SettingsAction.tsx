import {Dispatch} from 'redux'
import { SET_SETTINGS } from './SettingsAction.types';

export const setSettings = (settings: object = {}) => (dispatch:Dispatch) => {
    dispatch({
        type: SET_SETTINGS, payload: settings
    });
}