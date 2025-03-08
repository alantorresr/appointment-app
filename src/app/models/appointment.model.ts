export class Appointment {
    constructor(
      public appoinmentId: BigInteger,
      public title: string,
      public date: string,
      public time: string,
      public description?: string
    ) {}
  }