export const kDDragonURL = "http://ddragon.leagueoflegends.com/cdn/";
export const kVersion = "13.6.1";
export const kLanguage = "en_US";

export const kChampionsUrl = `${kDDragonURL}${kVersion}/data/${kLanguage}/champion.json`;
export const kChampionSplashUrl = (id: string, index = 0) =>
  `${kDDragonURL}${kVersion}/img/champion/splash/${id}_${index}.jpg`;
