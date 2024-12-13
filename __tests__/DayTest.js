import Day from '../src/Model/Day.js';

describe('Day 클래스 테스트', () => {
  test('근무일 하루에는 월과 일, 요일을 지정할 수 있다.', () => {
    expect(() => {
      new Day(1, 5, '월');
    }).not.toThrow('[ERROR]');
  });

  test.each([
    ['', 5, ''],
    ['일', 5, '월'],
    [1, 5, '헤헤'],
    [13, 5, '화'],
  ])('잘못된 입력이 들어온 경우 에러 메세지를 출력한다.', (month, day, date) => {
    expect(() => {
      new Day(month, day, date);
    }).toThrow('[ERROR]');
  });

  test.each([
    [1, 2, '토', true],
    [1, 2, '일', true],
    [1, 1, '월', true],
    [1, 3, '월', false],
  ])('휴일 여부를 체크한다.', (month, day, date, result) => {
    const oneDay = new Day(month, day, date);
    expect(oneDay.isDayOff).toBe(result);
  });

  test('근무자는 추가가 가능하다.', () => {
    const day = new Day(1, 1, '월');
    day.setWorker('민성제');
    expect(day.worker).toBe('민성제');
  });

  test.each([
    [1, 2, '토', '1월 2일 토 민성제'],
    [1, 2, '일', '1월 2일 일 민성제'],
    [1, 1, '월', '1월 1일 월(휴일) 민성제'],
    [1, 3, '월', '1월 3일 월 민성제'],
  ])('근무일의 모든 정보는 하나의 string으로 가공 가능하다.', (month, day, date, result) => {
    const oneDay = new Day(month, day, date);
    oneDay.setWorker('민성제');
    expect(oneDay.getInfoString()).toBe(result);
  });
});
