type UserSessionDuration = {
  day: number;
  sessionLength: number;
};

/** Class representing a model for user sessions duration data */
export default class UserSessionDurationModel {
  /**
   * Create user sessions duration data model.
   * @param {UserSessionDuration} data - The data value
   */
  sessionLength: number;
  day: string;
  constructor(data: UserSessionDuration) {
    this.day = ['L', 'M', 'M', 'J', 'V', 'S', 'D'][data.day - 1];
    this.sessionLength = data.sessionLength;
  }
}
