type User = {
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

export default class UserDataModel {
  calorieCount: string;
  proteinCount: number;
  carbohydrateCount: number;
  lipidCount: number;
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  todayScore: number;
  constructor(data: User) {
    this.id = data.id;
    this.firstName = data.userInfos.firstName;
    this.lastName = data.userInfos.lastName;
    this.age = data.userInfos.age;
    this.todayScore = data.todayScore;
    this.calorieCount = new Intl.NumberFormat('en-In')
      .format(data.keyData.calorieCount)
      .toString();
    this.proteinCount = data.keyData.proteinCount;
    this.carbohydrateCount = data.keyData.carbohydrateCount;
    this.lipidCount = data.keyData.lipidCount;
  }
}
