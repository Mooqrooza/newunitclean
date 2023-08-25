import { IStateSettings } from './SettingsReducer.types';
import { 
  SettingsAction, 
  SET_SETTINGS 
} from "src/actions/SettingsAction/SettingsAction.types";

const initialStateSettings = {
  hidePrice: true,
};


export function SettingsReducer(state: IStateSettings = initialStateSettings, action: SettingsAction) {
  switch (action.type) {
    case SET_SETTINGS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
