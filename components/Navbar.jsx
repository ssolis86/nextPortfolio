// import { background } from "@chakra-ui/react";
// import MuiNextLink from "./MuiNextLink";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Button from '@mui/material/Button';
import Link from "next/link";


const Navbar = ({ navLinks }) => {
  return (
    <Toolbar component="nav" sx={{display: { xs: `none`, md: `flex` },}}>
      <Stack direction="row" spacing={4}>
        {navLinks.map(({ title, path }, i) => (
          <Link key={`${title}${i}`}
                href={path}
          >
            <Button
              
              variant="contained"
              color="secondary"
              sx={{ color: `grey`, opacity: 0.8 }}
            >
              {title}
            </Button>
          </Link>
        ))}
      </Stack>
    </Toolbar>
  );
};

export default Navbar;
