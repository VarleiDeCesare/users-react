export default function isValidPassword(password: string): boolean {
  const specialCaracterPattern = new RegExp('[!@#$%^&*(),.?":{}|<>]');
  const numberPattern = new RegExp('[0-9]+');
  const lowerCasePattern = new RegExp('[a-z]+');
  const upperCasePattern = new RegExp('[A-Z]+');

  return (
    password.length >= 8 &&
    numberPattern.test(password) &&
    lowerCasePattern.test(password) &&
    upperCasePattern.test(password) &&
    specialCaracterPattern.test(password)
  );
}
