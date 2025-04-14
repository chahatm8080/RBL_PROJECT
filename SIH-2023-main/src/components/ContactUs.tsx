import Box from "@mui/material/Box";
import "font-awesome/css/font-awesome.min.css";
import Typography from "@mui/material/Typography";

const CommonStyles = {
  borderRadius: "12px",
  border: "1px solid #ccc",
  overflow: "hidden",
  maxWidth: "80%",
  margin: "auto",
  position: "relative",
};

const ContactUs = () => {
  return (
    <>
      <Box
        sx={{
          ...CommonStyles,
          p: 2,
          flex: 1,
          backgroundColor: "#FFFFFF",
          marginTop: "12px",
          borderTopRightRadius: "12px",
          borderBottomRightRadius: "12px",
          display: "flex",
        }}
      >
        <Box sx={{ mb: 3, padding: "12px" }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Ubuntu",
              color: "#023E8A",
              display: "flex",
              justifyContent: "center",
              fontWeight: "medium-bold",
              lineHeight: 1.5, 
              padding: 0/2, 
              textDecoration: "underline",
              textDecorationThickness: 2.5,
              
              
            }}
          >
            Contact Us
          </Typography>
          <Box
            sx={{
              borderRadius: "10px",
              padding: "15px",
              fontFamily: "Ubuntu",
              fontSize: "1.2rem",
              backgroundColor: "#FFFFFF",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                borderRight: "1px solid #ccc",
                width: "50%",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Box>
                <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
                  Offices:
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
                  MUMBAI
                </Typography>
                <Typography variant="body1">
                TCET, A-Block, Gate No 5, Thakur Educational Campus, Thakur Rd, Thakur Village, Kandivali East, Mumbai, Maharashtra 400101, India
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                width: "50%",
                display: "flex",
                justifyContent: "center",
                marginLeft: "20px",
                flexDirection: "column",
              }}
            >
              <Box>
                <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold", mt:2, }}>
                  Contact Info:
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="body1"
                  sx={{ mb: 1, fontFamily: "Ubuntu", fontSize: "1.2rem", mt: 2, }}
                >
                  <i className="fa fa-phone"></i> <span>+91 98765 *****</span>
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ mb: 1, fontFamily: "Ubuntu", fontSize: "1.2rem" }}
                >
                  <i className="fa fa-phone"></i> <span>+91 77065 *****</span>
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ mb: 1, fontFamily: "Ubuntu", fontSize: "1.2rem" }}
                >
                  <i className="fa fa-phone"></i> <span>+91 94555 *****</span>
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ mb: 1, fontFamily: "Ubuntu", fontSize: "1.2rem" }}
                >
                  <i className="fa fa-envelope"></i>{" "}
                  <span>legal@official.in</span>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", marginBottom: "1em" }}>
      <iframe
        title="Thakur College of Engineering and Technology"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.8575247749733!2d72.87187851490223!3d19.206247152020777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0e57647569d%3A0xc0aec329c82d3555!2sThakur%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1645268882736!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 1 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      </Box>
    </>
  );
};

export default ContactUs;
