type UserActivity = {
  day: string;
  kilogram: number;
  calories: number;
};

/** Class representing a model for user activities model */
export default class UserActivitiesModel {
  /**
   * Create user activiites data model.
   * @param {UserActivity} data - The data value
   */
  day;
  calories;
  kilogram;
  constructor(data: UserActivity) {
    this.day = new Date(data.day).getDate();
    this.kilogram = data.kilogram;
    this.calories = data.calories;
  }
}
