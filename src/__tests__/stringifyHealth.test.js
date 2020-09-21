import stringifyHealth from '../index';

test('should return string name of health status', () => {
  const expected = 'healthy';
  const recived = stringifyHealth({ name: 'Test', health: 60 });

  expect(recived).toBe(expected);
});

test('should return string name of health status', () => {
  const expected = 'healthy';
  const recived = stringifyHealth({ name: 'Test', health: 51 });

  expect(recived).toBe(expected);
});

test('should return string name of health status', () => {
  const expected = 'wounded';
  const recived = stringifyHealth({ name: 'Test', health: 50 });

  expect(recived).toBe(expected);
});

test('should return string name of health status', () => {
  const expected = 'wounded';
  const recived = stringifyHealth({ name: 'Test', health: 49 });

  expect(recived).toBe(expected);
});

// Сделал тесты двумя способами только для того, чтобы попробовать оба

test.each([
  ['wounded', 45],
  ['wounded', 16],
  ['wounded', 15],
  ['critical', 14],
  ['critical', 10],
])(
  ('should return string name of health status'), (health, healthPoints) => {
    expect(stringifyHealth({ name: 'Test', health: healthPoints })).toBe(health);
  },
);
