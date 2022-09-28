import UserActivityModel from './models/UserActivityModel';
import UserDataModel from './models/UserDataModel';
import UserPerformanceModel from './models/UserPerformanceModel';
import UserSessionDurationModel from './models/UserSessionDurationModel';

export type User = {
  id: number;
  userInfos: {
    firstName: string;
    lastName: string;
    age: number;
  };
  todayScore: number;
  keyData: {
    calorieCount: number;
    proteinCount: number;
    carbohydrateCount: number;
    lipidCount: number;
  };
};

export type UserActivity = {
  userId: number;
  sessions: [
    {
      day: string;
      kilogram: number;
      calories: number;
    }
  ];
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

export const getUser = async (id: number): Promise<UserDataModel> => {
  const response = await fetch(`http://localhost:3000/user/${id}`);
  const dataJson = await response.json();
  return new UserDataModel(dataJson.data);
};

export const getUserActivity = async (
  id: number
): Promise<UserActivityModel> => {
  const response = await fetch(`http://localhost:3000/user/${12}/activity`);
  const dataJson = await response.json();
  return dataJson.data.sessions.map(
    (session: { day: string; kilogram: number; calories: number }) =>
      new UserActivityModel(session)
  );
};

export const getUserAverageSession =
  async (): Promise<UserSessionDurationModel> => {
    const response = await fetch(
      'http://localhost:3000/user/12/average-sessions'
    );
    const dataJson = await response.json();
    return new UserSessionDurationModel(dataJson.data);
  };
/*
export const getUserPerformance = async (): Promise<UserPerformanceModel> => {
  const response = await fetch('http://localhost:3000/user/12/performance');
  const dataJson = await response.json();
  return new UserPerformanceModel(dataJson.data);
};
*/
