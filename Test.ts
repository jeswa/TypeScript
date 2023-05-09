class User {
    name: string;
    age?: number;
    birthday?: string;

    constructor(name: string, age?: number, birthday?: string) {
        this.name = name;
        if (age) {
            this.age = age;
        } else
            if (birthday) {
                let birthdayDate = new Date(birthday);
                let ageInMilliSeconde = Date.now() - birthdayDate.getTime();
                this.age = Math.floor(ageInMilliSeconde / 1000 / 60 / 60 / 24 / 365);
            }
    }
}

