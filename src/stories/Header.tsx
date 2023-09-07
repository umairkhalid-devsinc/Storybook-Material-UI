import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { Button } from './Button';

interface User {
  name: string;
}

export interface HeaderProps {
  user?: User;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const Header = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}: HeaderProps) => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Acme
        </Typography>
        {user ? (
          <React.Fragment>
            <Typography variant="h6" mr={2}>
              {user.name}
            </Typography>
            <Button color="inherit" onClick={onLogout} label="Logout" />
          </React.Fragment>
        ) : (
          <Button color="inherit" onClick={onLogin} label="Log in" />
        )}
      </Toolbar>
    </AppBar>
  </Box>
);
