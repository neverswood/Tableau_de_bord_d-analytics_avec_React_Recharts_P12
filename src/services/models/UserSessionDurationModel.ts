type UserSessionDuration = {
  day: number;
  sessionLength: number;
};

export default class UserSessionDurationModel {
  sessionLength: number;
  day: string;
  constructor(data: UserSessionDuration) {
    this.day = ['L', 'M', 'M', 'J', 'V', 'S', 'D'][data.day - 1];
    this.sessionLength = data.sessionLength;
  }
}
