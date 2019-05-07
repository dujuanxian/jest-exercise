import { sum, person } from './index';

test('demo', () => {
  const result = 3;
  const value = 3;

  expect(result).toBe(value);
});

test('sum的结果为3', () => {
  const result = sum(1, 2);
  const value = 3;

  // TODO: 给出正确的assertion，本行以上不能修改
  expect(result).toBe(value);
});

test('sum的结果不为3', () => {
  const result = sum(2, 2);
  const value = 3;

  // TODO: 给出正确的assertion，本行以上不能修改
  expect(result).toBe(value);
});

test('person对象的值', () => {
  const result = person('Tom');
  const value = {
    name: 'Tom'
  };

  // TODO: 给出正确的assertion，本行以上不能修改
  expect(result).toBe(value);
});
