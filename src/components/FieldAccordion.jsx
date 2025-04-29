import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { colors, typography, components } from '../styles/common';

/**
 * FieldAccordion - Collapsible section for grouping form fields
 * @param {string} title - The accordion section title
 * @param {React.ReactNode} children - The content inside the accordion
 * @param {boolean} expanded - Whether the accordion is expanded
 * @param {function} onChange - Callback when accordion expanded state changes
 */
const FieldAccordion = ({ title, children, expanded, onChange }) => {
  return (
    <Accordion 
      expanded={expanded} 
      onChange={onChange}
      sx={{ 
        ...components.accordion.wrapper,
        '&.Mui-expanded': {
          mb: 0,
        },
        '&:before': {
          display: 'none',
        }
      }}
    >
      <AccordionSummary 
        expandIcon={
          expanded ? 
            <ExpandLessIcon sx={{ fontSize: '1.2rem', color: colors.text.secondary }} /> : 
            <ExpandMoreIcon sx={{ fontSize: '1.2rem', color: colors.text.secondary }} />
        }
        sx={{ 
          ...components.accordion.header,
          borderBottom: expanded ? `1px solid ${colors.border.medium}` : 'none',
          '& .MuiAccordionSummary-content': {
            my: 0
          }
        }}
      >
        <Typography sx={{ ...typography.subheader }}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ p: 0 }}>
        {children}
      </AccordionDetails>
    </Accordion>
  );
};

export default FieldAccordion;
