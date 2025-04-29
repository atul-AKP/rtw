import React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const TabNavigation = ({ tabs, activeTab, handleTabChange }) => {
  return (
    <Box 
      sx={{ 
        bgcolor: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        pl: 1,
        py: 0.75,
        borderBottom: '1px solid',
        borderColor: 'rgba(0, 0, 0, 0.08)',
        flexShrink: 0,
        boxShadow: 'none',
        position: 'relative',
        zIndex: 2
      }}
    >
      <Box 
        sx={{ 
          display: 'inline-flex', 
          alignItems: 'center',
          bgcolor: 'rgba(240, 240, 240, 0.8)',
          borderRadius: '16px',
          border: '1px solid rgba(0, 0, 0, 0.08)',
          padding: '2px',
          mx: 0.5
        }}>
        {tabs.map((label, index) => (
          <Box
            key={index}
            onClick={() => handleTabChange(index)}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '28px',
              minWidth: '110px',
              fontSize: '0.85rem',
              fontWeight: activeTab === index ? 500 : 400,
              cursor: 'pointer',
              borderRadius: '14px',
              color: activeTab === index ? '#2074d4' : 'rgba(0, 0, 0, 0.6)',
              backgroundColor: activeTab === index ? 'rgba(32, 116, 212, 0.1)' : 'transparent',
              boxShadow: activeTab === index ? '0 1px 2px rgba(32, 116, 212, 0.1)' : 'none',
              transition: 'all 0.2s ease',
              padding: '0 12px',
              '&:hover': {
                color: activeTab === index ? '#2074d4' : 'rgba(0, 0, 0, 0.8)',
              },
              ...(index < tabs.length - 1 && {
                mr: 0.5,
              }),
            }}
          >
            {label}
          </Box>
        ))}
        
        <Box sx={{ ml: 0.5, mr: -0.5 }}>
          <IconButton size="small">
            <MoreHorizIcon sx={{ fontSize: '1.1rem' }} />
          </IconButton>
        </Box>
      </Box>

      {/* No controls on the right */}
    </Box>
  );
};

export default TabNavigation;
