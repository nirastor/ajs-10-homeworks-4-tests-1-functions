import stringifyHealth from '../index';

test('should return string name of health status', () => {
  const expected = 'healthy';
  const recived = stringifyHealth({ name: 'Test', health: 55 });

  expect(recived).toBe(expected);
});
