import { array } from './index';

test('数组包含Banana', () => {
  const result = array('Apple', 'Banana');
  const value = 'Banana';

  // TODO: 给出正确的assertion，本行以上不能修改
  expect(result).toBe(value);
});
