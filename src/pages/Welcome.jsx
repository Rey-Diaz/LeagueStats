// src/pages/Welcome.jsx

import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to the League Stats App</h1>
      <p>This is a project that allows you to fetch and analyze League of Legends match statistics.</p>
      <Button variant="contained" onClick={() => navigate('/login')}>
        Login to get started
      </Button>
    </div>
  );
};

export default Welcome;
