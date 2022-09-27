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
  score;
  constructor(dataUser: User) {
    this.id = dataUser.id;
    this.firstName = dataUser.userInfos.firstName;
    this.lastName = dataUser.userInfos.lastName;
    this.age = dataUser.userInfos.age;
    this.score = dataUser.todayScore;
    this.calorieCount = dataUser.keyData.calorieCount;
    this.proteinCount = dataUser.keyData.proteinCount;
    this.carbohydrateCount = dataUser.keyData.carbohydrateCount;
    this.lipidCount = dataUser.keyData.lipidCount;
  }
}

/*
export default class UserActivity {
    userId: number;
    sessions: any;
    day: string;
    kilogram: number;
    calories: number;
    constructor(
        userId: number, sessions: Array<Object>, day: string, kilogram: number, calories: number)
            {
                this.userId = userId;
                this.sessions = sessions;
                this.day = day;
                this.kilogram = kilogram;
                this.calories = calories;
            }
    }*/
