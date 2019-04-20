export class User {
    constructor(
        public firstName: string,
        public lastName:string,
        public email: string,
        public phone: number,
        public topic:string,
        public timePreference : string,
        public subscribe: boolean
    ){}
}
