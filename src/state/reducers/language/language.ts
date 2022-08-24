import { ChangeLanguageActionType, CHANGE_LANGUAGE } from './actions';

type langCode = 'en' | 'zh';

interface LanguageState {
  language: langCode;
  languageList: { name: string; code: langCode }[];
}

const defaultState: LanguageState = {
  language: 'en',
  languageList: [
    { name: '中文', code: 'zh' },
    { name: 'English', code: 'en' },
  ],
};

export const languageReducer = (
  prevState = defaultState,
  action: ChangeLanguageActionType
) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return { ...prevState, language: action.payload };
    default:
      return prevState;
  }
};
