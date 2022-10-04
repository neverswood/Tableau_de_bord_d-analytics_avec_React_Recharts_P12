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
  //const response = await fetch('mock/mock_user_data.json');
  const dataJson = await response.json();
  return new UserDataModel(dataJson.data);
  //return new UserDataModel(dataJson);
};

export const getUserActivities = async (
  id: number
): Promise<UserActivityModel[]> => {
  const response = await fetch(`http://localhost:3000/user/${id}/activity`);
  //const response = await fetch('mock/mock_user_activity.json');
  const dataJson = await response.json();
  /*  return dataJson.sessions.map(
    (sessions: { day: string; kilogram: number; calories: number }) =>
      new UserActivityModel(sessions)
  );*/
  return dataJson.data.sessions.map(
    (session: { day: string; kilogram: number; calories: number }) =>
      new UserActivityModel(session)
  );
};

export const getUserAverageSessions = async (
  id: number
): Promise<UserSessionDurationModel[]> => {
  const response = await fetch(
    `http://localhost:3000/user/${id}/average-sessions`
  );
  // const response = await fetch('mock/mock_user_average_sessions.json');
  const dataJson = await response.json();
  /*  return dataJson.sessions.map(
    (sessions: { day: number; sessionLength: number }) =>
      new UserSessionDurationModel(sessions)
  );*/
  return dataJson.data.sessions.map(
    (session: { day: number; sessionLength: number }) =>
      new UserSessionDurationModel(session)
  );
};

export const getUserPerformances = async (
  id: number
): Promise<UserPerformanceModel[]> => {
  const response = await fetch(`http://localhost:3000/user/${id}/performance`);
  //const response = await fetch('mock/mock_user_performance.json');
  const dataJson = await response.json();
  /*return dataJson.data.map(
    (data: { value: number; kind: number }) => new UserPerformanceModel(data)
  );*/
  return dataJson.data.data.map(
    (data: { value: number; kind: number }) => new UserPerformanceModel(data)
  );
};
