export class ListPendingPay {
     constructor(
         public user_id: number,
         public description: string,
         public date_pay: string,
         public cost: number,
         public target_account: number,   
         public state_pay: boolean
       ) {}
 }
