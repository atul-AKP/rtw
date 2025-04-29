import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { colors, typography, components } from '../styles/common';

/**
 * FieldRow - Displays a form field with label and value
 * @param {string} label - The field label
 * @param {string} value - The field value
 * @param {string} fieldId - Optional ID for the field (needed for selection)
 * @param {function} onSelect - Callback when field is selected
 * @param {boolean} isHighlighted - Whether the field should be highlighted
 */
const FieldRow = ({ label, value, fieldId, onSelect, isHighlighted }) => {
  const handleClick = () => {
    if (fieldId && onSelect) {
      onSelect(fieldId);
    }
  };
  
  return (
    <Box 
      onClick={handleClick}
      sx={{ 
        ...components.formField.wrapper,
        cursor: fieldId && onSelect ? 'pointer' : 'default',
        '&:hover': fieldId && onSelect ? {
          '& .field-value': {
            bgcolor: colors.background.highlight,
            borderColor: colors.border.highlight
          }
        } : {}
      }}
    >
      <Typography 
        component="div" 
        variant="body2" 
        sx={{ 
          ...typography.label,
          ...components.formField.label
        }}
      >
        {label}
      </Typography>
      
      <Box 
        sx={{ 
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          width: '75%',
          paddingRight: '30px'
        }}
      >
        <Box 
          className="field-value"
          sx={{
            ...components.formField.value,
            ...(isHighlighted && components.formField.valueHighlighted)
          }}
        >
          {value}
        </Box>
        
        <CheckCircleIcon 
          sx={{ 
            position: 'absolute',
            right: 0,
            color: colors.success,
            fontSize: '1.3rem'
          }} 
        />
      </Box>
    </Box>
  );
};

export default FieldRow;