import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FlagIcon from '@mui/icons-material/Flag';
import SyncIcon from '@mui/icons-material/Sync';
import { colors, typography, layout } from '../styles/common';

/**
 * AppHeader - Main application header displaying request details and actions
 * @param {Object} requestDetails - Details about the current request
 */
const AppHeader = ({ requestDetails = {} }) => {
  // Use default values if details are not provided
  const { 
    requestId = "RQ-20250422-7845", 
    agingDays = 4, 
    planName = "SecureFuture 401(k)", 
    status = "In Progress" 
  } = requestDetails;
  
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        px: 1.5,
        py: 0.75,
        bgcolor: colors.background.paper,
        borderBottom: '1px solid',
        borderColor: colors.border.medium
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {/* Back button */}
        <IconButton 
          size="small" 
          sx={{ 
            color: colors.text.secondary, 
            mr: 0.75, 
            p: 0.5,
            '&:hover': {
              bgcolor: 'rgba(0,0,0,0.04)'
            }
          }}
        >
          <ArrowBackIcon sx={{ fontSize: '1.1rem' }} />
        </IconButton>
        
        {/* Request ID in pill */}
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            bgcolor: colors.primary.main,
            color: 'white',
            borderRadius: layout.borderRadius,
            fontSize: '0.75rem',
            fontWeight: 'medium',
            height: '26px',
            px: 1.5,
            mr: 1
          }}
        >
          {requestId}
        </Box>
        
        {/* Aging indicator */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: '2px 8px 2px 4px',
            bgcolor: '#feeaea', // Specific color for warning
            borderRadius: layout.borderRadius,
            fontSize: '0.75rem',
            mr: 2
          }}
        >
          <FlagIcon sx={{ color: colors.error, mr: 0.5, fontSize: '0.9rem' }} />
          <Typography sx={{ color: colors.error, fontSize: '0.75rem', fontWeight: 500 }}>
            Aging: Day {agingDays}
          </Typography>
        </Box>
        
        {/* Plan name */}
        <Typography 
          variant="subtitle1" 
          sx={{ 
            fontWeight: 600, 
            fontSize: '0.85rem',
            color: colors.text.primary,
            ml: 1
          }}
        >
          {planName}
        </Typography>
      </Box>
      
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        
        {/* Sync icon */}
        <IconButton
          size="small"
          sx={{
            color: colors.text.secondary,
            p: 0.5,
            mr: 1.5
          }}
        >
          <SyncIcon sx={{ fontSize: '1.1rem' }} />
        </IconButton>
        
        {/* Cancel button */}
        <Button 
          variant="text" 
          color="inherit" 
          size="small"
          sx={{ 
            color: colors.text.primary,
            fontSize: '0.75rem',
            height: '28px',
            minWidth: 'auto',
            px: 1.5,
            textTransform: 'none',
            mr: 0.5
          }}
        >
          Cancel
        </Button>
        
        {/* Save button */}
        <Button 
          variant="contained" 
          size="small"
          sx={{ 
            bgcolor: '#111', // Specific dark button color
            color: 'white',
            fontSize: '0.75rem',
            height: '28px',
            px: 1.5,
            borderRadius: layout.borderRadius,
            textTransform: 'none',
            '&:hover': {
              bgcolor: '#000',
            }
          }}
        >
          Save Draft
        </Button>
      </Box>
    </Box>
  );
};

export default AppHeader;