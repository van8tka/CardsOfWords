import {expect, test, describe} from '@jest/globals';
import Word from '@models/Words';
import {parseContent} from '@utils/parseContent';

const enterIdTheme = 1234;

describe('parseContent', () => {
  test('success parse one string', () => {
    const enterData = 'book [bo:k] книга';
    const expectedData: Word[] = [
      {
        id:0,
        idTheme: enterIdTheme,
        foreign: 'book',
        translation: 'книга',
        transcription: '[bo:k]',
        isLearned: false,
      },
    ];
    const result = parseContent(enterIdTheme, enterData);
    expect(result).toEqual(expectedData);
  });

  test('success parse one string without transcription', () => {
    const enterData = 'book [] книга';
    const expectedData: Word[] = [
      {
        id:0,
        idTheme: enterIdTheme,
        foreign: 'book',
        translation: 'книга',
        transcription: '',
        isLearned: false,
      },
    ];
    const result = parseContent(enterIdTheme, enterData);
    expect(result).toEqual(expectedData);
  });

  test('success parse multi string', () => {
    const enterData = 'book [bo:k] книга\nman [me:n] мужчина';
    const expectedData: Word[] = [
      {
        id:0,
        idTheme: enterIdTheme,
        foreign: 'book',
        translation: 'книга',
        transcription: '[bo:k]',
        isLearned: false,
      },
      {
        id:0,
        idTheme: enterIdTheme,
        foreign: 'man',
        translation: 'мужчина',
        transcription: '[me:n]',
        isLearned: false,
      },
    ];
    const result = parseContent(enterIdTheme, enterData);
    expect(result).toEqual(expectedData);
  });

  test('success parse multi string when last bad', () => {
    const enterData = 'book [bo:k] книга\nman90450jgj45\nkfoe';
    const expectedData: Word[] = [
      {
        id:0,
        idTheme: enterIdTheme,
        foreign: 'book',
        translation: 'книга',
        transcription: '[bo:k]',
        isLearned: false,
      },
    ];
    const result = parseContent(enterIdTheme, enterData);
    expect(result).toEqual(expectedData);
  });

  test('success parse no string', () => {
    const enterData = '';
    const expectedData: Word[] = [];
    const result = parseContent(enterIdTheme, enterData);
    expect(result).toEqual(expectedData);
  });

  test('success parse bad string', () => {
    const enterData = '23203iniofnefv0945nf045j; iemkoerom';
    const expectedData: Word[] = [];
    const result = parseContent(enterIdTheme, enterData);
    expect(result).toEqual(expectedData);
  });

  test('success parse string null', () => {
    const enterData = null;
    const expectedData: Word[] = [];
    // @ts-ignore
    const result = parseContent(enterIdTheme, enterData);
    expect(result).toEqual(expectedData);
  });

  test('success parse string undefined', () => {
    const enterData = null;
    const expectedData: Word[] = [];
    // @ts-ignore
    const result = parseContent(enterIdTheme, enterData);
    expect(result).toEqual(expectedData);
  });
});
