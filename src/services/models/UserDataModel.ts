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
  calorieCount: number;
  proteinCount: number;
  carbohydrateCount: number;
  lipidCount: number;
  id;
  firstName;
  lastName;
  age;
  todayScore;
  userInfos;
  keyData;
  constructor(data: User) {
    this.id = data.id;
    this.userInfos = data.userInfos;
    this.firstName = this.userInfos.firstName;
    this.lastName = this.userInfos.lastName;
    this.age = this.userInfos.age;
    this.todayScore = data.todayScore;
    this.keyData = data.keyData;
    this.calorieCount = this.keyData.calorieCount;
    this.proteinCount = this.keyData.proteinCount;
    this.carbohydrateCount = this.keyData.carbohydrateCount;
    this.lipidCount = this.keyData.lipidCount;
  }
}
