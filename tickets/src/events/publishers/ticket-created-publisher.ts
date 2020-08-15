import { Publisher, Subjects, TicketCreatedEvent } from "@somtickets/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  // Define the type as Subjects.TicketCreated so that it doesnt change
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
