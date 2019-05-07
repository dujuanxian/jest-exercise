import { sum } from '../basic/index';

test('demo', () => {
  const result = sum(1, 1);
  const value = 1;

  expect(result).toBeGreaterThan(value);
});

test('result比3小', () => {
  const result = sum(1, 1);
  const value = 3;

  // TODO: 给出正确的assertion，本行以上不能修改
  expect(result).toBe(value);
});

test('result等于3.0', () => {
  const result = sum(2.0, 1.0);
  const value = 3.0;

  // TODO: 给出正确的assertion，本行以上不能修改
  expect(result).toBe(value);
});
