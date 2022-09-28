type UserPerformance = {
  value: number;
  kind: number;
};

export default class UserPerformanceModel {
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
