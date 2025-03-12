export class AppointmentModel {
    constructor(
      public appointmentId: number,
      public title?: string,
      public appointmentDate: string="",
      //public appointmentDate: Date= new Date(),
      public time?: string,
      public description?: string,
      public userid?: number,
      public appointmentStatusId: number=0,
      public appointmentStatusName?: string,
    ) {}
     appointmentStatusOptions = [
    { id: 1, name: 'Scheduled' },
    { id: 2, name: 'Completed' },
    { id: 3, name: 'Cancelled' }
  ];
  }