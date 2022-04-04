import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import Stack from "@mui/material/Stack";
import { LinkedIn, GitHub } from "@mui/icons-material";
import ArticleIcon from '@mui/icons-material/Article';
import MuiNextLink from "@components/MuiNextLink";
import { Button } from "@mui/material";

const Footer = () => {
  return (
        <Box component="footer" sx={{ py: 5, bgcolor: "primary.main" }}>
            <Stack direction="row" justifyContent="center" spacing={4} sx={{ mb: 5 }}>
                
                <MuiNextLink
                    sx={{ textDecoration: "none", color: "common.white" }}
                    href="https://github.com/ssolis86"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <GitHub fontSize="large" />
                </MuiNextLink>
                
                <MuiNextLink
                    sx={{ textDecoration: "none", color: "common.white" }}
                    href="https://www.linkedin.com/in/stephen-solis/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <LinkedIn fontSize="large" />
                </MuiNextLink>
                
                <MuiNextLink
                    sx={{ textDecoration: "none", color: "common.white" }}
                    href="https://drive.google.com/file/d/1EBBFZylpvDexiBgmC5lgbPhM6gu0nKPP/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <ArticleIcon fontSize="large" />
                </MuiNextLink>
            </Stack>

            <Typography align="center" color="common.white">
                © 2022 - {new Date().getFullYear()}, Stephen Solis
            </Typography>
        </Box>
  );
};

export default Footer;