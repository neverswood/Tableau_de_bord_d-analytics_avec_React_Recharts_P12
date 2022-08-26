import { type } from 'os';

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

export type UserSessionActivity = {
  day: string;
  kilogram: number;
  calories: number;
};

export type UserActivity = {
  userId: number;
  sessions: [UserSessionActivity];
};

type SessionDuration = {
  day: number;
  sessionLength: number;
};

export type UserSessionDuration = {
  userId: number;
  sessions: [SessionDuration];
};

type PerformanceKind = {
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
};

type PerformanceData = {
  value: number;
  kind: number;
};

export type UserPerformance = {
  userId: number;
  kind: PerformanceKind;
  data: [PerformanceData];
};

export const getUser = async (): Promise<{ data: User }> => {
  return fetch('http://localhost:3000/user/12')
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};

export const getUserActivity = async (): Promise<{ data: UserActivity }> => {
  return fetch('http://localhost:3000/user/12/activity')
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};

export const getUserAverageSession = async (): Promise<{
  data: UserSessionDuration;
}> => {
  return fetch('http://localhost:3000/user/12/average-sessions')
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};

export const getUserPerformance = async (): Promise<{
  data: UserPerformance;
}> => {
  return fetch('http://localhost:3000/user/12/performance')
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};
