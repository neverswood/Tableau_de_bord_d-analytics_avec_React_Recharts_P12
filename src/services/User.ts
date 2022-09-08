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
  const response = await fetch('http://localhost:3000/user/12');
  const data = await response.json();
  console.log('data', data);
  return data;
};

export const getUserActivity = async (): Promise<{ data: UserActivity }> => {
  const response = await fetch('http://localhost:3000/user/12/activity');
  const data = await response.json();
  console.log('data', data);
  return data;
};

export const getUserAverageSession = async (): Promise<{
  data: UserSessionDuration;
}> => {
  const response = await fetch(
    'http://localhost:3000/user/12/average-sessions'
  );
  const data = await response.json();
  console.log('data', data);
  return data;
};

export const getUserPerformance = async (): Promise<{
  data: UserPerformance;
}> => {
  const response = await fetch('http://localhost:3000/user/12/performance');
  const data = await response.json();
  console.log('data', data);
  return data;
};
