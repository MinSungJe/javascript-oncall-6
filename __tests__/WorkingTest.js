import Working from '../src/Model/Working.js';

describe('Working 객체 테스트', () => {
  test('배정월과 시작요일 값이 들어오면 배정근무 객체가 생성된다.', () => {
    expect(() => {
      new Working('5,월');
    }).not.toThrow('[ERROR]');
  });

  test.each(['', '오월', '오,초', '오,월', '5,초'])(
    '잘못된 값이 들어오면 에러 메세지를 출력한다.',
    (assignInput) => {
      expect(() => {
        new Working(assignInput);
      }).toThrow('[ERROR]');
    }
  );

  test('배정월과 시작요일에 맞는 근무일 객체가 생성된다.', () => {
    const working = new Working('5,월');
    expect(working.days.length).toBe(31);
  });
});
