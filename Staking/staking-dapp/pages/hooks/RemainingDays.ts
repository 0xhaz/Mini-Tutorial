export const calculateRemainingDays = (unlockDate: number) => {
  const timeNow = Date.now() / 1000;
  const remainingSeconds = unlockDate - timeNow;
  return Math.max(parseInt((remainingSeconds / 60 / 60 / 24).toFixed(0)), 0);
};
