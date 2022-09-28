type UserSessionDuration = {
  day: string;
  sessionLength: number;
};

export default class UserSessionDurationModel {
  day;
  sessionLength;
  days: string[];
  newDate: string;
  constructor(data: UserSessionDuration) {
    this.days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    this.day = Number(data.day);
    this.newDate = this.days[this.day - 1];
    this.sessionLength = data.sessionLength;
  }
}
