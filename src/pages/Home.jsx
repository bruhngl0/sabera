import {
  Box,
  useMediaQuery,
  useTheme,
  Typography,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import { useState } from "react";

import homeImg from "../assets/images/home_one.png";

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ fullname: "", email: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const scriptURL =
      "https://script.google.com/macros/s/AKfycby-jfjTdqiosIBhMV96yCSRDJNYWrZmN40fVOqt9Vt150eUklrZWfINu91nQmyi6AzmEA/exec";

    const formBody = new URLSearchParams(formData).toString();

    try {
      await fetch(scriptURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formBody,
      });
      alert("Thank you for subscribing!");
      setFormData({ fullname: "", email: "" });
    } catch (error) {
      console.error("Error!", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      height={isMobile ? "auto" : "100vh"}
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="start"
      py={13}
      gap={2}
    >
      <Box width="100%" height={600}>
        <Box
          component="img"
          src={homeImg}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>

      <Box px={4} py={2} width="100%">
        <Typography
          variant="h3"
          fontFamily={theme.fonts?.primary}
          fontSize={isMobile ? "5vw" : "2.5vw"}
          mb={isMobile ? 2 : 8}
          lineHeight={2}
        >
          Launching Soon
        </Typography>
        <Typography
          variant="body2"
          fontFamily={theme.fonts?.secondary}
          mb={2}
          fontSize={isMobile ? "3vw" : "1.4vw"}
          textAlign="justify"
        >
          We are excited to share what we have been working on. <br /> Sign up
          to our newsletter to be among the first to know when our site
          launches.
        </Typography>

        <form onSubmit={handleSubmit}>
          <Stack direction={isMobile ? "column" : "row"} spacing={2}>
            <TextField
              name="fullname"
              label="Full Name"
              variant="outlined"
              value={formData.fullname}
              onChange={handleChange}
              sx={{
                backgroundColor: "#fff",
                "& .MuiOutlinedInput-root": {
                  color: "#000",
                  "& fieldset": { borderColor: "#000" },
                  "&:hover fieldset": { borderColor: "#000" },
                  "&.Mui-focused fieldset": { borderColor: "#000" },
                },
                "& .MuiInputLabel-root": {
                  color: "#000",
                },
                "& label.Mui-focused": {
                  color: "#000",
                },
                input: { color: "#000" },
              }}
            />

            <TextField
              name="email"
              label="Email"
              variant="outlined"
              type="email"
              value={formData.email}
              onChange={handleChange}
              sx={{
                backgroundColor: "#fff",
                "& .MuiOutlinedInput-root": {
                  color: "#000",
                  "& fieldset": { borderColor: "#000" },
                  "&:hover fieldset": { borderColor: "#000" },
                  "&.Mui-focused fieldset": { borderColor: "#000" },
                },
                "& .MuiInputLabel-root": {
                  color: "#000",
                },
                "& label.Mui-focused": {
                  color: "#000",
                },
                input: { color: "#000" },
              }}
            />

            <Button
              type="submit"
              variant="contained"
              disabled={loading}
              sx={{
                backgroundColor: "#000",
                color: "#fff",
                px: 4,
                "&:hover": {
                  backgroundColor: "#222",
                },
              }}
            >
              {loading ? "Submitting..." : "Subscribe"}
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};

export default Home;
