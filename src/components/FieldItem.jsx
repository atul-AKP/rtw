import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CheckCircle, Error } from '@mui/icons-material';

const FieldItem = ({ label, value, hasError, onClick }) => {
  return (
    <Box 
      sx={{ 
        p: 2, 
        borderBottom: 1, 
        borderColor: 'divider',
        cursor: 'pointer',
        '&:hover': { bgcolor: 'action.hover' }
      }}
      onClick={onClick}
    >
      <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
        {label}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="body1" fontWeight={500}>
          {value}
        </Typography>
        {hasError ? (
          <Error fontSize="small" color="warning" />
        ) : (
          <CheckCircle fontSize="small" color="success" />
        )}
      </Box>
    </Box>
  );
};

export default FieldItem;
