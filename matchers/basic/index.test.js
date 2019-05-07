import { sum, person } from './index';

test('demo', () => {
  const result = 3;
  const expect = 3;

  expect(result).toBe(expect);
});

test('sum的结果为3', () => {
  const result = sum(1, 2);
  const expect = 3;

  // TODO: 给出assertion
  expect(result);
});

test('sum的结果不为3', () => {
  const result = sum(2, 2);
  const expect = 3;

  // TODO: 给出assertion
  expect(result);
});

test('person对象的值', () => {
  const result = person('Tom');
  const expect = {
    name: 'Tom'
  };

  // TODO: 给出assertion
  expect(result);
});
