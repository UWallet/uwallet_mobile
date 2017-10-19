export class ListPendingPay {
    constructor(
        public id: number,
        public target_account: number,
        public date_pay: string,
        public description: string,
        public cost: number,
        public state: boolean
       ) {}
}
