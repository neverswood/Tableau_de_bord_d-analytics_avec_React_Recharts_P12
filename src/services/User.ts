export type UserInfos = {
  firstName: string;
  lastName: string;
  age: number;
};

export type UserKeyData = {
  calorieCount: number;
  proteinCount: number;
  carbohydrateCount: number;
  lipidCount: number;
};

export type User = {
  id: number;
  userInfos: UserInfos;
  todayScore: number;
  keyData: UserKeyData;
};

type UserSession = {
  day: string;
  kilogram: number;
  calories: number;
};

export type UserActivity = {
  userId: number;
  sessions: UserSession;
};

export const getUser = async (): Promise<{ data: User }> => {
  return fetch('http://localhost:3000/user/12')
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};

export const getUserActivity = async (): Promise<UserActivity> => {
  return fetch('http://localhost:3000/user/12/activity')
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};
