import React, {useState} from 'react';
import {View, TextInput, Text, Keyboard} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Word from '@models/Words';
import {useThemes} from '@utils/themes/ThemeContext';
import ILocalizedStrings from '@utils/localization/ILocalizedStrings';
import {useLocalization} from '@utils/localization/LocalizationContext';
import styles from '@components/WordForm/InputWordsForm/styles';
import PrimaryButton from '@primitives/ui/PrimaryButton/PrimaryButton';
import TranscriptKeyboard from '@primitives/ui/TranscriptKeyboard/TranscriptKeyboard';
import log from '@utils/logger';

const maxLenghtWords = 200;
// Определяем схему валидации с Yup
const schema = (locale: ILocalizedStrings) => Yup.object().shape({
  foreignWord: Yup.string()
    .required(locale.requiredForeign)
    .max(maxLenghtWords, locale.validationWordMax),
  translateWord: Yup.string()
    .required(locale.requiredTranslate)
    .max(maxLenghtWords, locale.validationWordMax),
  transcriptionWord: Yup.string()
    .max(maxLenghtWords, locale.validationWordMax),
});

// Определяем типы для формы
type FormData = {
  foreignWord: string;
  translateWord: string;
  transcriptionWord?: string;
};

interface InputWordsFormProps {
  idTheme?: number;
  word?: Word;
  onSubmitForm: (word: Word) => void;
}

const InputWordsForm: React.FC<InputWordsFormProps> = ({idTheme, word, onSubmitForm}: InputWordsFormProps) => {
  log.info('InputWordsForm', 'render');
  const theme = useThemes();
  const locale = useLocalization();

  //todo need use appSlice with settings
  const isVisibleTranscriptKeyboard = true;

  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema(locale)),
    defaultValues: {
      foreignWord: word ? word.foreign : '',
      translateWord: word ? word.translation : '',
      transcriptionWord: word ? word.transcription : '',
    },
  });

  const onSubmit = (data: FormData) => {
    setShowTranscript(false);
    if(word) {
      onSubmitForm({...word,
        translation: data.translateWord,
        transcription: getTranscript(data),
        foreign: data.foreignWord});
    } else if (idTheme) {
      onSubmitForm({
        id: 0,
        idTheme: idTheme,
        translation: data.translateWord,
        transcription: getTranscript(data),
        foreign: data.foreignWord,
        isLearned: false,
      });
    }
  };

  function getTranscript(data: FormData){
    return isVisibleTranscriptKeyboard ? transcript : data.transcriptionWord;
  }

  function onFocusTranscript(){
    if(isVisibleTranscriptKeyboard) {
      setShowTranscript(true);
      Keyboard.dismiss();
    }
  }

  function onFocusWordInput(){
    if(isVisibleTranscriptKeyboard) {
      setShowTranscript(false);
    }
  }

  const [transcript, setTranscript] = useState<string>(word?.transcription || '');
  const [showTranscript, setShowTranscript] = useState<boolean>(false);

  return (
    <View style={styles(theme).container}>
      <Controller
        control={control}
        name={'foreignWord'}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles(theme).input}
            placeholder={locale.foreignWord}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            maxLength={maxLenghtWords}
            onFocus={onFocusWordInput}
          />
        )}
      />
      {errors.foreignWord && <Text style={styles(theme).error}>{errors.foreignWord.message}</Text>}

      <Controller
        control={control}
        name={'translateWord'}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles(theme).input}
            placeholder={locale.translateWord}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            maxLength={maxLenghtWords}
            onFocus={onFocusWordInput}
          />
        )}
      />
      {errors.translateWord && <Text style={styles(theme).error}>{errors.translateWord.message}</Text>}

      {!isVisibleTranscriptKeyboard &&
      <Controller
        control={control}
        name={'transcriptionWord'}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles(theme).input}
            placeholder={locale.transcriptionWord}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            maxLength={maxLenghtWords}
          />
        )}
      />}
      {isVisibleTranscriptKeyboard &&
        <TextInput
          style={styles(theme).input}
          placeholder={locale.transcriptionWord}
          value={transcript}
          maxLength={maxLenghtWords}
          onFocus={onFocusTranscript}
        />}

      {errors.transcriptionWord && <Text style={styles(theme).error}>{errors.transcriptionWord.message}</Text>}

      <PrimaryButton title={locale.continue} onPress={handleSubmit(onSubmit)} />
      {isVisibleTranscriptKeyboard && showTranscript &&
        <TranscriptKeyboard
          value={transcript}
          onChange={setTranscript}
          onEnter={handleSubmit(onSubmit)}
        /> }
    </View>
  );
};

export default InputWordsForm;
