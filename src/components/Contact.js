import React from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-top">
        <Typography variant="h1">Let's Talk</Typography>
        <Typography variant="h3">about your business</Typography>
        <Typography variant="body1">
          At PrimeView, our team of Arizona web design and development
          professionals really love what we do. It gives us a great sense of
          pride to see our client's businesses reap the rewards of our efforts.
          An exquisite, stunning website combined with our digital marketing
          services can take your company to the top. Why not contact us today
          and talk to us about your business!
        </Typography>
      </div>
      <div className="contact-bottom">
        <form>
          <TextField label="Name" fullWidth />
          <TextField label="Phone" fullWidth />
          <TextField label="Email" fullWidth />
          <TextField label="Subject" fullWidth />
          <TextField label="Message" fullWidth multiline rows={4} />
          <FormControlLabel
            control={<Checkbox />}
            label="I consent this site to collect my information"
          />
          <Typography variant="body1">
            This form collects your information so that we can correspond with
            you. Please check our
            <span style={{ textDecoration: "underline" }}>
              {" "}
              Privacy Policy
            </span>{" "}
            and
            <span style={{ textDecoration: "underline" }}>
              {" "}
              Terms and Conditions
            </span>
            .
          </Typography>
          <Button
            variant="contained"
            color="primary"
            style={{
              width: "30%",
              borderRadius: "50px",
              marginTop: "20px",
              marginLeft: "130px",
            }}
          >
            Send
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
