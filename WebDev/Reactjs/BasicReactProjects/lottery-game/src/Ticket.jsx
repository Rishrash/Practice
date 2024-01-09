import TicketNum from "./TicketNum";
import "./Ticket.css";
export default function Ticket({ ticketArr }) {
  return (
    <div className="Ticket">
      <p>Ticket</p>
      {ticketArr.map((num, index) => (
        <TicketNum num={num} key={index} />
      ))}
    </div>
  );
}
