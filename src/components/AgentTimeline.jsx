import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const AgentTimeline = ({ events }) => {
  return (
    <Box sx={{ position: 'relative', pt: 1 }}>
      {/* Timeline connector line */}
      <Box 
        className="timeline-connector"
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 18,
          width: 2,
          bgcolor: '#e0e0e0'
        }}
      />
      
      {/* Timeline events */}
      {events.map((event) => (
        <Box 
          key={event.id}
          className="timeline-item"
          sx={{ mb: 2, position: 'relative', pl: 6 }}
        >
          <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
            <Box 
              className="agent-avatar"
              sx={{ 
                bgcolor: event.color,
                position: 'absolute',
                left: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 36,
                height: 36,
                color: 'white',
                fontSize: '0.8rem',
                fontWeight: 600,
                borderRadius: '50%'
              }}
            >
              {event.agentInitials}
            </Box>
            
            <Box 
              sx={{ 
                bgcolor: 'grey.100',
                p: 1.25,
                borderRadius: 1,
                boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
                width: '100%'
              }}
            >
              <Typography variant="body1" fontWeight={500} sx={{ mb: 0.5, fontSize: '0.9rem' }}>
                {event.agentType}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>
                {event.message}
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default AgentTimeline;
