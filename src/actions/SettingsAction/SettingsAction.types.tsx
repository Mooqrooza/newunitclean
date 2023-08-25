export const SET_SETTINGS = 'SET_SETTINGS';

interface setSettingsAction {
  payload: object;
  type: typeof SET_SETTINGS;
}

export type SettingsAction = setSettingsAction;