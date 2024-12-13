import WeekdayWork from '../src/Model/WeekdayWork.js';
import WeekendWork from '../src/Model/WeekendWork.js';

describe('WeekdayWork 객체 테스트', () => {
  const weekdayWork = new WeekdayWork('준팍,도밥,고니,수아,루루');
  const weekendWork = new WeekendWork('루루,수아,고니,도밥,준팍', weekdayWork.workerList);

  test.each([
    ',도밥,고니,,,,',
    '민성제,고니,도밥,민성제,공이',
    '민,성,제',
    '1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0',
    '',
  ])('잘못된 입력이 들어오면 에러 메세지를 출력한다.', (workerInput) => {
    expect(() => {
      new WeekendWork(workerInput, weekdayWork.workerList);
    }).toThrow('[ERROR]');
  });

  test('주에 들어오지 않은 근무자가 있을 경우 에러 메세지를 출력한다.', () => {
    const weekdayWork = new WeekdayWork('준팍,도밥,고니,수아,루루,민성제');

    expect(() => {
      new WeekendWork('루루,수아,고니,도밥,준팍', weekdayWork.workerList);
    }).toThrow('[ERROR]');
  });

  test('다음 근무자 닉네임을 알 수 있다.', () => {
    expect(weekendWork.getNextWorker()).toBe('루루');
    expect(weekendWork.getNextWorker()).toBe('수아');
    expect(weekendWork.getNextWorker()).toBe('고니');
    expect(weekendWork.getNextWorker()).toBe('도밥');
    expect(weekendWork.getNextWorker()).toBe('준팍');
    expect(weekendWork.getNextWorker()).toBe('루루');
  });

  test('다음 근무자 닉네임을 이름으로 알 수 있다.', () => {
    expect(weekendWork.getNextWorkerByName('고니')).toBe('도밥');
    expect(weekendWork.getNextWorkerByName('준팍')).toBe('루루');
  });
});
