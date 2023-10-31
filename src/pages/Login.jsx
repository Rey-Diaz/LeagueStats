// Login.jsx
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const Login = () => {
  const [summonerName, setSummonerName] = useState('');
  const [region, setRegion] = useState('');

  // Add the login function here

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Paper elevation={3} sx={{ p: 4, mt: 8 }} className="login-card">
          <h1>Login</h1>
          <TextField
            label="Summoner Name"
            value={summonerName}
            onChange={(e) => setSummonerName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Region"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" onClick={() => {/* Handle the login */}} fullWidth>
            Fetch Data
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;
