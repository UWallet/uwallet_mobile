export class CreditCard {
    constructor(
        public number: string,
        public amount: number,
        public expiration_month: number,
        public expiration_year: number
       ) {}
}

export class CardToTransfer {
    constructor(
        public cardId: number,
        public money: number
       ) {}
}
