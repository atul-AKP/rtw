import React, { useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const FieldRow = ({ label, value, isBlue = false, isHighlighted = false, fieldId }) => {
  const fieldRef = useRef(null);
  
  // Scroll into view when highlighted
  useEffect(() => {
    if (isHighlighted && fieldRef.current) {
      // Add a small delay to ensure the accordion is expanded before scrolling
      setTimeout(() => {
        fieldRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 300);
    }
  }, [isHighlighted]);
  
  // Base styles
  const baseStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    py: 1.6,
    px: 2,
    borderBottom: '1px solid',
    borderColor: 'divider',
    transition: 'all 0.3s ease',
  };
  
  // Add background highlight if the field is highlighted
  const highlightStyles = isHighlighted ? {
    backgroundColor: 'rgba(91, 139, 247, 0.08)',
    borderLeft: '3px solid #5b8bf7',
    pl: 2.5,
  } : {};
  
  return (
    <Box 
      ref={fieldRef}
      id={fieldId} // Add ID for scrolling to this element
      sx={{ 
        ...baseStyles,
        ...highlightStyles
      }}
    >
      <Typography 
        component="div" 
        variant="body1" 
        sx={{ 
          color: (isBlue || isHighlighted) ? '#5b8bf7' : 'text.secondary',
          fontSize: '0.9rem',
          fontWeight: isHighlighted ? 500 : 400,
          maxWidth: '80%',
          lineHeight: 1.5,
        }}
      >
        {label}
      </Typography>
      
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <CheckCircleIcon 
          sx={{ 
            color: '#4caf50',
            fontSize: '1.2rem',
            ml: 1
          }} 
        />
      </Box>
    </Box>
  );
};

const CustomAccordion = ({ title, children, expanded, onChange }) => {
  return (
    <Accordion 
      expanded={expanded} 
      onChange={onChange}
      sx={{
        boxShadow: 'none',
        '&:before': {
          display: 'none',
        },
        '& .MuiAccordionSummary-root': {
          minHeight: '48px',
          borderBottom: '1px solid',
          borderColor: 'divider',
          px: 0,
          '&.Mui-expanded': {
            minHeight: '48px',
          }
        },
        '& .MuiAccordionSummary-content': {
          m: 0,
          '&.Mui-expanded': {
            m: 0,
          }
        },
        '& .MuiAccordionDetails-root': {
          px: 0,
          py: 0
        }
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
      >
        <Typography 
          sx={{ 
            fontWeight: 600, 
            fontSize: '1rem',
            color: '#222'
          }}
        >
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        {children}
      </AccordionDetails>
    </Accordion>
  );
};

const SupportingDocumentPanel = ({ highlightedField = null }) => {
  const [expandedSection, setExpandedSection] = useState('sourcesAvailable');
  
  // When a field needs to be highlighted, ensure its section is expanded
  useEffect(() => {
    if (highlightedField) {
      // Extract the section from the field ID structure (e.g., "postTermination.lumpsum")
      const parts = highlightedField.split('.');
      if (parts.length > 0) {
        setExpandedSection(parts[0]);
      }
    }
  }, [highlightedField]);
  
  const handleSectionChange = (section) => (event, isExpanded) => {
    setExpandedSection(isExpanded ? section : false);
  };

  // Check if a field should be highlighted
  const isFieldHighlighted = (sectionId, fieldId) => {
    if (!highlightedField) return false;
    return highlightedField === `${sectionId}.${fieldId}`;
  };

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      {/* Header */}
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          borderBottom: 1, 
          borderColor: 'divider',
          pl: 2,
          pr: 1,
          py: 1.2,
          flexShrink: 0
        }}
      >
        <Typography variant="subtitle1" fontWeight={700} fontSize="1.1rem">
          Plan Rules
        </Typography>
      </Box>
      
      {/* Content */}
      <Box sx={{ flexGrow: 1, overflowY: 'auto', p: 2 }}>
        {/* Sources Available */}
        <CustomAccordion
          title="Sources Available"
          expanded={expandedSection === 'sourcesAvailable'}
          onChange={handleSectionChange('sourcesAvailable')}
        >
          <Box>
            <FieldRow 
              label="Sources available once eligibility has been met ( E, F, I, Y )" 
              value="Yes" 
              isBlue={true}
              isHighlighted={isFieldHighlighted('sourcesAvailable', 'eligibility')}
              fieldId="sourcesAvailable.eligibility"
            />
          </Box>
        </CustomAccordion>

        {/* Post Termination Eligibility */}
        <CustomAccordion
          title="Post Termination Eligibility"
          expanded={expandedSection === 'postTermination'}
          onChange={handleSectionChange('postTermination')}
        >
          <Box>
            <FieldRow 
              label="Does the plan allow for small sum cash distribution? Yes" 
              value="Yes"
              isHighlighted={isFieldHighlighted('postTermination', 'smallSumCash')}
              fieldId="postTermination.smallSumCash"
            />
            <FieldRow 
              label="Does the plan allow Lumpsum Distribution? Yes" 
              value="Yes"
              isHighlighted={isFieldHighlighted('postTermination', 'lumpsum')} 
              fieldId="postTermination.lumpsum"
            />
            <FieldRow 
              label="Does the plan permit systematic cash withdrawals (SWAT)? Yes" 
              value="Yes"
              isHighlighted={isFieldHighlighted('postTermination', 'systematicWithdrawals')}
              fieldId="postTermination.systematicWithdrawals"
            />
          </Box>
        </CustomAccordion>

        {/* Spousal Waiver */}
        <CustomAccordion
          title="Spousal Waiver"
          expanded={expandedSection === 'planRules' || 
                    expandedSection === 'spousalWaiver'}
          onChange={handleSectionChange('planRules')}
        >
          <Box>
            <FieldRow 
              label="Does the plan require spousal waiver for applicable transaction types? Yes" 
              value="Yes"
              isHighlighted={isFieldHighlighted('planRules', 'spousalWaiver') || 
                             isFieldHighlighted('spousalWaiver', 'required')} 
              fieldId="planRules.spousalWaiver"
            />
            <FieldRow 
              label="Does the plan allow a spousal waiver exception for employee plan accumulations under $5000 or for accumulations with the last contribution date prior to August 24th 1984? Yes" 
              value="Yes"
              isHighlighted={isFieldHighlighted('planRules', 'spousalWaiver.exceptionsApplicable') || 
                             isFieldHighlighted('spousalWaiver', 'exceptionsApplicable')}
              fieldId="planRules.spousalWaiver.exceptionsApplicable"
            />
          </Box>
        </CustomAccordion>

        {/* QDPRO Eligibility */}
        <CustomAccordion
          title="QDPRO Eligibility"
          expanded={expandedSection === 'qdproEligibility'}
          onChange={handleSectionChange('qdproEligibility')}
        >
          <Box>
            <FieldRow 
              label='Can the alternate payee take a distribution at any time (status is "terminated" on our system)? Yes' 
              value="Yes"
              isHighlighted={isFieldHighlighted('qdproEligibility', 'qdroDistribution')}
              fieldId="qdproEligibility.qdroDistribution"
            />
            <FieldRow 
              label="Does the plan follow the cash after separation rules for alternate payees? No. 100% of accumulated balance available to alternate payee" 
              value="Yes"
              isHighlighted={isFieldHighlighted('qdproEligibility', 'cashAfterSeparation')}
              fieldId="qdproEligibility.cashAfterSeparation"
            />
            <FieldRow 
              label="Do the plans in-service withdrawal provisions apply to the alternate payee? No. 100% of accumulated available to alternate payee" 
              value="Yes"
              isHighlighted={isFieldHighlighted('qdproEligibility', 'inServiceWithdrawal')}
              fieldId="qdproEligibility.inServiceWithdrawal"
            />
          </Box>
        </CustomAccordion>
      </Box>
    </Box>
  );
};

export default SupportingDocumentPanel;
