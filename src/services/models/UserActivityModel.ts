type UserActivity = {
  day: string;
  kilogram: number;
  calories: number;
};

export default class UserActivityModel {
  day;
  calories;
  kilogram;
  constructor(data: UserActivity) {
    this.day = new Date(data.day).getDate();
    this.kilogram = data.kilogram;
    this.calories = data.calories;
  }
}
