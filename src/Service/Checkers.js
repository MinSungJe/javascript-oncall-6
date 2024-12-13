export const StringChecker = {
  // string으로 주어진 숫자가 Number인지 확인
  isNumberString: (string) => {
    return !!Number(string) || string === '0';
  },

  // string이 정규식을 만족하는지 확인
  isRegString: (string, regExp) => {
    return regExp.test(string);
  },
};

export const NumberChecker = {
  // 주어진 숫자가 최솟값 이상인지 확인
  isMorethanMin: (number, min) => {
    return number >= min;
  },

  // 주어진 숫자가 최댓값 이하인지 확인
  isLessthanMax: (number, max) => {
    return number <= max;
  },

  // 주어진 숫자가 범위 내에 있는지 확인
  isRangedNumber: (number, min, max) => {
    return NumberChecker.isMorethanMin(number, min) && NumberChecker.isLessthanMax(number, max);
  },
};

export const ListChecker = {
  // 주어진 리스트에 중복값이 있는지 확인
  isNoRepeatValue: (list) => {
    const set = new Set(list);
    return list.length === set.size;
  },

  // 주어진 리스트의 길이 확인
  isExactLength: (list, length) => {
    return list.length === length;
  },

  // 주어진 리스트에 특정 값이 있는지 확인
  isIncludesValue: (list, value) => {
    return list.includes(value);
  },

  // 두 리스트의 모든 요소가 같은 지 체크
  isSameElementList: (list1, list2) => {
    return list1.length === list2.length && list2.every((item) => list1.includes(item));
  },
};
