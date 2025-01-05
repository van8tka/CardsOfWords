import React from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Word from '@models/Words';
import {useThemes} from '@utils/themes/ThemeContext';
import ILocalizedStrings from '@utils/localization/ILocalizedStrings';
import {useLocalization} from '@utils/localization/LocalizationContext';

// Определяем схему валидации с Yup
const schema = (locale: ILocalizedStrings) => Yup.object().shape({
  foreignWord: Yup.string()
    .required(locale.requiredForeign)
    .max(200, locale.validationWordMax),
  translateWord: Yup.string()
    .required(locale.requiredTranslate)
    .max(200, locale.validationWordMax),
  transcriptionWord: Yup.string()
    .max(200, locale.validationWordMax),
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
    <View style={styles.container}>
      <Controller
        control={control}
        name={'foreignWord'}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder={locale.foreignWord}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.foreignWord && <Text style={styles.error}>{errors.foreignWord.message}</Text>}

      <Controller
        control={control}
        name={'translateWord'}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder={locale.translateWord}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.translateWord && <Text style={styles.error}>{errors.translateWord.message}</Text>}

      <Controller
        control={control}
        name={'transcriptionWord'}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder={locale.transcriptionWord}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.transcriptionWord && <Text style={styles.error}>{errors.transcriptionWord.message}</Text>}

      <Button title={locale.continue} onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default InputWordsForm;
