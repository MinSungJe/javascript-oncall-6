import WeekdayWork from '../src/Model/WeekdayWork.js';

describe('WeekdayWork 객체 테스트', () => {
  const weekdayWork = new WeekdayWork('준팍,도밥,고니,수아,루루');

  test.each([
    ',도밥,고니,,,,',
    '민성제,고니,도밥,민성제,공이',
    '민,성,제',
    '1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0',
    '',
  ])('잘못된 입력이 들어오면 에러 메세지를 출력한다.', (workerInput) => {
    expect(() => {
      new WeekdayWork(workerInput);
    }).toThrow('[ERROR]');
  });

  test('다음 근무자 닉네임을 알 수 있다.', () => {
    expect(weekdayWork.getNextWorker()).toBe('준팍');
    expect(weekdayWork.getNextWorker()).toBe('도밥');
    expect(weekdayWork.getNextWorker()).toBe('고니');
    expect(weekdayWork.getNextWorker()).toBe('수아');
    expect(weekdayWork.getNextWorker()).toBe('루루');
    expect(weekdayWork.getNextWorker()).toBe('준팍');
  });

  test('다음 근무자 닉네임을 이름으로 알 수 있다.', () => {
    expect(weekdayWork.getNextWorkerByName('고니')).toBe('수아');
    expect(weekdayWork.getNextWorkerByName('루루')).toBe('준팍');
  });
});
