export interface Appointment {
  id:number;
  therapistId:number;
  therapistName:string;
  clientId:number;
  clientName:string;
  clientAddress: string;
  checkinTime:string;
  checkoutTime:string;
  actualCheckinTime:string;
  actualCheckoutTime:string;
  status: string;
}
