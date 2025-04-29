import React, { useState } from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { formData, timelineEvents, requestDetails } from "../data/sampleData"
import AppHeader from "../components/AppHeader"
// import "../styles/common.css"
import TabNavigation from "../components/TabNavigation"
import LeftPanel from "../components/LeftPanel"
import MiddlePanel from "../components/MiddlePanel"
import RightPanel from "../components/RightPanel"
import SupportingDocumentPanel from "../components/SupportingDocumentPanel"
// Import PDF files
import inputFormPdf from "../data/1-4438761044228_418994849_88673XXXXX_3_2025.pdf"
import supportingDocsPdf from "../data/April-Bill-Postpaid.pdf"

const RetirementWithdrawal = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [selectedFieldId, setSelectedFieldId] = useState(
    "planRules.spousalWaiver.exceptionsApplicable"
  )
  const [isHuddlePopped, setIsHuddlePopped] = useState(false)
  const [huddlePosition, setHuddlePosition] = useState({ x: 0, y: 0 })
  const [highlightedField, setHighlightedField] = useState(null)

  // PDF file paths for each tab
  const pdfFiles = {
    0: inputFormPdf, // Input Form PDF
    1: supportingDocsPdf, // Supporting Documents PDF
    2: supportingDocsPdf, // Using supporting docs as placeholder for Contract
  }

  const tabs = ["Input Form", "Supporting Documents", "Contract"]

  const handleTabChange = (newValue) => {
    setActiveTab(newValue)
  }

  const handleFieldSelect = (fieldId) => {
    setSelectedFieldId(fieldId)
    // In a real implementation, this would trigger the PDF preview
    // to scroll to the corresponding section
  }

  // Handle agent message clicks
  const handleAgentMessageClick = (mapping) => {
    if (mapping) {
      // Change to appropriate tab if needed
      if (
        typeof mapping.tabIndex === "number" &&
        mapping.tabIndex !== activeTab
      ) {
        setActiveTab(mapping.tabIndex)
      }

      // Set the field to highlight
      if (mapping.sectionId && mapping.fieldId) {
        setHighlightedField(`${mapping.sectionId}.${mapping.fieldId}`)
      }
    }
  }

  const toggleHuddle = () => {
    console.log("Toggle Huddle called, current state:", isHuddlePopped)
    const newState = !isHuddlePopped
    setIsHuddlePopped(newState)

    // Reset position when closing
    if (newState === false) {
      setHuddlePosition({ x: 0, y: 0 })
    }
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        overflow: "hidden",
        bgcolor: "#f5f5f5",
      }}
    >
      <AppHeader requestDetails={requestDetails} />

      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          overflow: "hidden",
          flexDirection: { xs: "column", md: "row" },
          height: "calc(100vh - 64px)", // Adjust for header height
          p: 2,
          position: "relative", // Important for absolute positioning of popped out panel
        }}
        className="main-container"
      >
        {/* Main content area (Left + Middle panels) */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: { xs: "100%", md: isHuddlePopped ? "100%" : "75%" }, // Expand when huddle is popped out
            height: "100%",
            bgcolor: "background.paper",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            borderRadius: "4px",
            overflow: "hidden",
            transition: "width 0.3s ease", // Smooth transition when expanding/contracting
          }}
        >
          {/* Tab Navigation */}
          <TabNavigation
            tabs={tabs}
            activeTab={activeTab}
            handleTabChange={handleTabChange}
          />

          {/* Content panels */}
          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
              overflow: "hidden",
            }}
          >
            {/* Left Panel - PDF Preview */}
            <Box
              className="column"
              sx={{
                width: "50%",
                overflowY: "auto",
                position: "relative",
                height: "100%",
              }}
            >
              <LeftPanel
                selectedFieldId={selectedFieldId}
                activeTab={activeTab}
                pdfFiles={pdfFiles}
              />
            </Box>

            {/* Middle Panel - Changes based on selected tab */}
            <Box
              className="column"
              sx={{
                width: "50%",
                overflowY: "auto",
                position: "relative",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {activeTab === 0 && (
                <MiddlePanel
                  formData={formData}
                  onFieldSelect={handleFieldSelect}
                  highlightedField={highlightedField}
                />
              )}
              {activeTab === 1 && (
                <SupportingDocumentPanel highlightedField={highlightedField} />
              )}
              {activeTab === 2 && (
                <Box sx={{ p: 3 }}>
                  <Typography variant="h6">Contract Details</Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 2 }}
                  >
                    Contract information would be displayed here.
                  </Typography>
                </Box>
              )}
            </Box>
          </Box>
        </Box>

        {/* Right Panel - AI Huddle (only shown when not popped out) */}
        {!isHuddlePopped && (
          <Box
            className="column"
            sx={{
              width: { xs: "100%", md: "25%" },
              ml: 2,
              bgcolor: "background.paper",
              position: "relative",
              height: "100%",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              borderRadius: "4px",
              overflow: "hidden",
              display: "flex",
            }}
          >
            <RightPanel
              timelineEvents={timelineEvents}
              isPopped={isHuddlePopped}
              onTogglePop={toggleHuddle}
              position={huddlePosition}
              onPositionChange={setHuddlePosition}
              onMessageClick={handleAgentMessageClick}
            />
          </Box>
        )}

        {/* Popped out version of AI Huddle */}
        {isHuddlePopped && (
          <RightPanel
            timelineEvents={timelineEvents}
            isPopped={isHuddlePopped}
            onTogglePop={toggleHuddle}
            position={huddlePosition}
            onPositionChange={setHuddlePosition}
            onMessageClick={handleAgentMessageClick}
          />
        )}
      </Box>
    </Box>
  )
}

export default RetirementWithdrawal
