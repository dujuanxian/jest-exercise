import { sum } from '../basic/index';

test('demo', () => {
  const result = sum(1, 1);
  const expect = 1;

  expect(result).toBeGreaterThan(expect);
});

test('result比3小', () => {
  const result = sum(1, 1);
  const expect = 3;

  // TODO: 给出assertion
  expect(result);
});

test('result等于3.0', () => {
  const result = sum(2.0, 1.0);
  const expect = 3.0;

  // TODO: 给出assertion
  expect(result);
});
