// src/components/Header.jsx

import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

const Header = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
          >
            LOL - League of Learning
          </Typography>
          <nav>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none', margin: '0 10px' }}>
              Home
            </Link>
            {/* Add more navigation links as needed */}
          </nav>
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
