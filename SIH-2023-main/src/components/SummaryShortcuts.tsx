import { Box } from "@mui/material";
import "../styles/SummaryShortcuts.css";
import ServiceIcon from "./ServiceIcon";

const SummaryShortcuts = () => {
  return (
    <section className="summary-shortcuts">
      <div className="summary">
        <h1>Discover Legal Services</h1>
        <p>
          Are you in need of legal assistance? Look no further! Legallyours is
          your one-stop destination to find a wide range of legal service
          providers, including advocates, arbitrators, mediators, notaries, and
          document writers. Our platform simplifies the process of connecting
          with experienced professionals who can address your specific legal
          needs.
        </p>
      
      </div>
      <div className="shortcuts">
        <h1>Our services</h1>
        <Box sx={{ display: "flex" }}>
          <ServiceIcon catagory="lawyer"></ServiceIcon>
          <ServiceIcon catagory="arbitrator"></ServiceIcon>
        </Box>
        <Box sx={{ display: "flex" }}>
          <ServiceIcon catagory="mediator"></ServiceIcon>
          <ServiceIcon catagory="documentWriter"></ServiceIcon>
        </Box>
      </div>
    </section>
  );
};

export default SummaryShortcuts;
