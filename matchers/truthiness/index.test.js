import { sum } from '../basic/index';

test('demo', () => {
  const result = null;

  expect(result).toBeNull();
});

test('result被定义', () => {
  const result = null;

  // TODO: 给出assertion
  expect(result);
});

test('匹配result为真', () => {
  const result = sum(1, 2) === 3;

  // TODO: 给出assertion
  expect(result);
});
