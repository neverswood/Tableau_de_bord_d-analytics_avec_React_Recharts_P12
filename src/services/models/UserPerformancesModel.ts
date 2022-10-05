type UserPerformance = {
  value: number;
  kind: number;
};

/** Class representing a model for performances data */
export default class UserPerformancesModel {
  /**
   * Create user performances data model.
   * @param {UserPerformance} data - The data value
   */
  kind;
  value;
  constructor(data: UserPerformance) {
    this.kind = [
      'Cardio',
      'Energie',
      'Endurance',
      'Force',
      'Vitesse',
      'Intensité',
    ][data.kind - 1];
    this.value = data.value;
  }
}
