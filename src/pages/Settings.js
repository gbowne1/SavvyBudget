import { Box, Button, TextField, Typography } from '@mui/material';

function Settings() {
  return (
    <Box>
      <Typography variant="h2">Settings</Typography>
      <Box>
        <TextField id="name" label="Name" />
      </Box>
      <Box>
        <TextField id="email" label="Email" />
      </Box>
      <Box>
        <TextField id="password" label="Password" type="password" />
      </Box>
      <Box>
        <Button variant="contained" color="primary">
          Save
        </Button>
      </Box>
    </Box>
  );
}

export default Settings;