type UserSessionDuration = {
  day: number;
  sessionLength: number;
};

export default class UserSessionDurationModel {
  sessionLength;
  newDay: string;
  constructor(data: UserSessionDuration) {
    this.newDay = ['L', 'M', 'M', 'J', 'V', 'S', 'D'][data.day - 1];
    this.sessionLength = data.sessionLength;
  }
}
