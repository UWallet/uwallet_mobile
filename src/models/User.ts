export class UserConId {
    constructor(
        public id: number,
        public firstName: string,
        public lastName: string,
        public email: string,
        public money: number
      ){}
}
export class User {
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public password: string,
        public password_confirmation: string
       ) {}
}
