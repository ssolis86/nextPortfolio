import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/system";
import IconButton from "@mui/material/IconButton"
import Home from "@mui/icons-material/Home"
import MuiNextLink from "@components/MuiNextLink";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

export const navLinks =[
  {title: 'home', path: '/'},
  {title: 'about me', path: '/about'},
  {title: 'projects', path: '/projects'},
  {title: 'technologies', path: '/technologies'},
  {title: 'contact me', path: '/contact'},
]

const Header = () => {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Container
            maxWidth="lg"
            sx={{ display: `flex`, justifyContent: `space-between` }}
          >
            <IconButton edge="start" aria-label="home">
              <MuiNextLink activeClassName="active" href="/">
                <Home
                  sx={{
                    color: (theme) => theme.palette.common.white,
                  }}
                  fontSize="large"
                />
              </MuiNextLink>
            </IconButton>
          </Container>
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};

export default Header;
