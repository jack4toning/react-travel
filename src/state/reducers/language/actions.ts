type langCode = 'en' | 'zh';
export const CHANGE_LANGUAGE = 'change_language';
export interface ChangeLanguageActionType {
  type: typeof CHANGE_LANGUAGE;
  payload: langCode;
}

export const changeLanguageActionCreator = (langCode: langCode) => {
  return {
    type: CHANGE_LANGUAGE,
    payload: langCode,
  };
};
