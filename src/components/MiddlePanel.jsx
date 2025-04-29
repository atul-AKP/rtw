import React, { useState } from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import FieldAccordion from "./FieldAccordion"
import FieldRow from "./FieldRow"
import { colors, typography, components } from "../styles/common"

/**
 * MiddlePanel - Displays extracted form fields in collapsible accordions
 * @param {Object} formData - Extracted data from the form
 * @param {Function} onFieldSelect - Callback when a field is selected
 * @param {string} highlightedField - Field ID that should be highlighted
 */
const MiddlePanel = ({ formData, onFieldSelect, highlightedField }) => {
  const [expandedAccordion, setExpandedAccordion] = useState("headers")

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpandedAccordion(isExpanded ? panel : false)
  }

  return (
    <Box sx={{ ...components.panel.wrapper }}>
      {/* Header */}
      <Box
        sx={{
          ...components.panel.header,
          pl: 2,
          pr: 1,
        }}
      >
        <Typography variant="subtitle1" sx={{ ...typography.header }}>
          Extracted Fields
        </Typography>
      </Box>

      {/* Content */}
      <Box
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          paddingBottom: 1,
          ...components.scrollbar.thin,
        }}
      >
        {/* Headers Accordion */}
        <FieldAccordion
          title="Headers"
          expanded={expandedAccordion === "headers"}
          onChange={handleAccordionChange("headers")}
        >
          <Box sx={{ px: 3, pt: 2, pb: 1 }}>
            <FieldRow label="Request Type" value="Cash Withdrawal" />
            <FieldRow label="Request Date" value="04/28/2025" />

            {/* Personal Information Subheader */}
            <Box
              sx={{
                mt: 1.5,
                mb: 2,
                ...typography.subheader,
                pb: 1.5,
              }}
            >
              Personal Information
            </Box>

            {/* Use formData.personalInfo for the field values */}
            {formData && formData.personalInfo && (
              <>
                <FieldRow
                  label="Full Name"
                  value={formData.personalInfo.fullName}
                />
                <FieldRow label="SSN" value={formData.personalInfo.ssn} />
                <FieldRow label="TEL NO." value={formData.personalInfo.telNo} />
                <FieldRow label="State" value={formData.personalInfo.state} />
                <FieldRow
                  label="Citizenship"
                  value={formData.personalInfo.citizenship}
                />
              </>
            )}
          </Box>
        </FieldAccordion>

        {/* Plan Information Accordion */}
        <FieldAccordion
          title="Plan Information"
          expanded={expandedAccordion === "planInfo"}
          onChange={handleAccordionChange("planInfo")}
        >
          <Box sx={{ px: 3, pt: 2, pb: 1 }}>
            {/* Use formData.planInfo for the field values */}
            {formData && formData.planInfo && (
              <>
                <FieldRow
                  label="Plan Name"
                  value={formData.planInfo.planName}
                />
                <FieldRow label="Plan #" value={formData.planInfo.planNumber} />
                <FieldRow
                  label="Contract no."
                  value={formData.planInfo.contractNumber}
                />
              </>
            )}
          </Box>
        </FieldAccordion>

        {/* Add Plan Rules Accordion */}
        <FieldAccordion
          title="Plan Rules"
          expanded={expandedAccordion === "planRules"}
          onChange={handleAccordionChange("planRules")}
        >
          <Box sx={{ px: 3, pt: 2, pb: 1 }}>
            {formData && formData.planRules && (
              <>
                {/* Post Termination Eligibility */}
                <Box
                  sx={{
                    mt: 1.5,
                    mb: 2,
                    ...typography.subheader,
                    fontSize: "0.9rem",
                    pb: 1,
                  }}
                >
                  Post Termination Eligibility
                </Box>

                <FieldRow
                  label="Small Sum Distribution"
                  value={
                    formData.planRules.postTerminationEligibility
                      .smallSumDistribution
                  }
                  fieldId="planRules.postTerminationEligibility.smallSumDistribution"
                  onSelect={onFieldSelect}
                  isHighlighted={
                    highlightedField ===
                    "planRules.postTerminationEligibility.smallSumDistribution"
                  }
                />
                <FieldRow
                  label="Lump Sum Distribution"
                  value={
                    formData.planRules.postTerminationEligibility
                      .lumpSumDistribution
                  }
                  fieldId="planRules.postTerminationEligibility.lumpSumDistribution"
                  onSelect={onFieldSelect}
                  isHighlighted={
                    highlightedField ===
                    "planRules.postTerminationEligibility.lumpSumDistribution"
                  }
                />

                {/* Spousal Waiver */}
                <Box
                  sx={{
                    mt: 3,
                    mb: 2,
                    ...typography.subheader,
                    fontSize: "0.9rem",
                    pb: 1,
                  }}
                >
                  Spousal Waiver
                </Box>

                <FieldRow
                  label="Required"
                  value={formData.planRules.spousalWaiver.required}
                  fieldId="planRules.spousalWaiver.required"
                  onSelect={onFieldSelect}
                  isHighlighted={
                    highlightedField === "planRules.spousalWaiver.required"
                  }
                />
                <FieldRow
                  label="Exceptions Applicable"
                  value={formData.planRules.spousalWaiver.exceptionsApplicable}
                  fieldId="planRules.spousalWaiver.exceptionsApplicable"
                  onSelect={onFieldSelect}
                  isHighlighted={
                    highlightedField ===
                    "planRules.spousalWaiver.exceptionsApplicable"
                  }
                />
              </>
            )}
          </Box>
        </FieldAccordion>
      </Box>
    </Box>
  )
}

export default MiddlePanel
