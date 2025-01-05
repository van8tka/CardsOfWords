import React from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Word from '@models/Words';

// Определяем схему валидации с Yup
const schema = Yup.object().shape({
  foreignWord: Yup.string()
    .required('Foreign word is required')
    .max(200, 'Max length is 200 characters'),
  translateWord: Yup.string()
    .required('Translate word is required')
    .max(200, 'Max length is 200 characters'),
  transcription: Yup.string()
    .required('Transcription is required')
    .max(200, 'Max length is 200 characters'),
});

// Определяем типы для формы
type FormData = {
  foreignWord: string;
  translateWord: string;
  transcription: string;
};

interface InputWordsFormProps {
  idTheme?: number;
  word?: Word;
  onSubmitForm: (word: Word) => void;
}

const InputWordsForm: React.FC<InputWordsFormProps> = ({idTheme, word, onSubmitForm}: InputWordsFormProps) => {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      foreignWord: word ? word.foreign : '',
      translateWord: word ? word.translation : '',
      transcription: word ? word.transcription : '',
    },
  });

  const onSubmit = (data: FormData) => {
    console.log('++++++ form data',data);
    if(word) {
      onSubmitForm({...word,
        translation: data.translateWord,
        transcription: data.transcription,
        foreign: data.foreignWord});
    } else if (idTheme) {
      onSubmitForm({
        id: 0,
        idTheme: idTheme,
        translation: data.translateWord,
        transcription: data.transcription,
        foreign: data.foreignWord,
        isLearned: false,
      });
    }
  };

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="foreignWord"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Foreign Word"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.foreignWord && <Text style={styles.error}>{errors.foreignWord.message}</Text>}

      <Controller
        control={control}
        name="translateWord"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Translate Word"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.translateWord && <Text style={styles.error}>{errors.translateWord.message}</Text>}

      <Controller
        control={control}
        name="transcription"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Transcription"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.transcription && <Text style={styles.error}>{errors.transcription.message}</Text>}

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
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
