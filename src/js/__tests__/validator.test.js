import Validator from '../validator';

test('validate 0-9 a-z _ -', () => {
  const username = 'nlo_tomsk-1_mail';
  expect(Validator.validateUsername(username)).toBeTruthy();
});

test('valid 3 digits', () => {
  const username = 'nlo_tomsk-123_mail';
  expect(Validator.validateUsername(username)).toBeTruthy();
});

test('not valid 4 digits', () => {
  const username = 'nlo_tomsk-1234_mail';
  expect(Validator.validateUsername(username)).toBeFalsy();
});

test.each([
  ['nlo_tomsk.mail'],
  ['nlo_tomsk;mail'],
  ['nlo_tomsk!mail'],
  ['nlo_tomsk%mail'],
])('(.!;%) be Falsy', (str) => {
  expect(Validator.validateUsername(str)).toBeFalsy();
});

test.each([
  ['-nlo_tomsk-1_mail'],
  ['nlo_tomsk-1_mail-'],
  ['_nlo_tomsk-1_mail'],
  ['nlo_tomsk-1_mail_'],
  ['5nlo_tomsk-1_mail'],
  ['nlo_tomsk_1_mail5'],
])('(-_d) start and (-_d) end, be Falsy', (str) => {
  expect(Validator.validateUsername(str)).toBeFalsy();
});
