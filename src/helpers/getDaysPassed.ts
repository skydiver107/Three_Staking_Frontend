import { REWARD_DAY, REWARD_HOURS } from "src/configs/config_dev";

export const getDaysPassed = async (currentTime: number, startTime: number) => {
  const daysPassed = Math.floor((currentTime - startTime) / REWARD_DAY);
  return daysPassed < 0 ? 0 : daysPassed;
}

export const getHoursPassed = async (currentTime: number, startTime: number) => {
  const hoursPassed = Math.floor((currentTime - startTime) / REWARD_HOURS)

  return hoursPassed < 0 ? 0 : hoursPassed
}