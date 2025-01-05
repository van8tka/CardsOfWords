import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Word from '@models/Words';
import {useThemes} from '@utils/themes/ThemeContext';
import ILocalizedStrings from '@utils/localization/ILocalizedStrings';
import {useLocalization} from '@utils/localization/LocalizationContext';
import styles from '@components/WordForm/InputWordsForm/styles';
import PrimaryButton from '@primitives/ui/PrimaryButton/PrimaryButton';

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
  const theme = useThemes();
  const locale = useLocalization();
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema(locale)),
    defaultValues: {
      foreignWord: word ? word.foreign : '',
      translateWord: word ? word.translation : '',
      transcriptionWord: word ? word.transcription : '',
    },
  });

  const onSubmit = (data: FormData) => {
    if(word) {
      onSubmitForm({...word,
        translation: data.translateWord,
        transcription: data.transcriptionWord,
        foreign: data.foreignWord});
    } else if (idTheme) {
      onSubmitForm({
        id: 0,
        idTheme: idTheme,
        translation: data.translateWord,
        transcription: data.transcriptionWord,
        foreign: data.foreignWord,
        isLearned: false,
      });
    }
  };

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
          />
        )}
      />
      {errors.translateWord && <Text style={styles(theme).error}>{errors.translateWord.message}</Text>}

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
      />
      {errors.transcriptionWord && <Text style={styles(theme).error}>{errors.transcriptionWord.message}</Text>}

      <PrimaryButton title={locale.continue} onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default InputWordsForm;
