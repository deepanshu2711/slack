export const generateJoinCode = (length: number = 6): string => {
  const code = Array.from(
    { length },
    () => '123456789abcdefghijklmnoqprswxyz'[Math.floor(Math.random() * 36)]
  ).join('');
  return code;
};
