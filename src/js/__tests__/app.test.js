import healthChecker from '../app';

test('check status', () => {
  const status = healthChecker({ name: 'Маг', health: 80 });

  expect(status).toBe('healthy');
});

test('check status', () => {
  const status = healthChecker({ name: 'Маг', health: 50 });

  expect(status).toBe('wounded');
});

test('check status', () => {
  const status = healthChecker({ name: 'Маг', health: 30 });

  expect(status).toBe('wounded');
});

test('check status', () => {
  const status = healthChecker({ name: 'Маг', health: 15 });

  expect(status).toBe('wounded');
});

test('check status', () => {
  const status = healthChecker({ name: 'Маг', health: 10 });

  expect(status).toBe('critical');
});
