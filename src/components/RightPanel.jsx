import React, { useState, useRef } from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import Avatar from "@mui/material/Avatar"
import TextField from "@mui/material/TextField"
import InputAdornment from "@mui/material/InputAdornment"
import Divider from "@mui/material/Divider"
import Draggable from "react-draggable"
import { agentMessageMappings } from "../data/agentMessageMappings"
import FullscreenIcon from "@mui/icons-material/Fullscreen"
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import MicIcon from "@mui/icons-material/Mic"
import SendIcon from "@mui/icons-material/Send"
import { colors, typography, layout, components } from "../styles/common"

/**
 * AgentMessage - Individual message in the AI Huddle panel
 * @param {string} message - The message content
 * @param {string} time - Optional timestamp for the message
 * @param {Function} onClick - Callback when message is clicked
 * @param {string} agentType - Type of agent that sent the message
 * @param {string} agentInitials - Initials to display in the avatar
 * @param {string} color - Color for the avatar background
 */
const AgentMessage = ({
  message,
  time,
  onClick,
  agentType,
  agentInitials,
  color,
}) => {
  // Default agent info if not provided
  const displayAgentType = agentType || "Plan Validation Agent"
  const displayInitials = agentInitials || "PV"
  const displayColor = color || colors.primary.light

  return (
    <Box
      onClick={() => onClick && onClick(message)}
      sx={{
        display: "flex",
        mb: 3,
        "&:hover": {
          cursor: "pointer",
          "& .message-text": {
            color: colors.primary.hover,
            transition: "color 0.2s ease",
          },
        },
      }}
    >
      <Avatar
        sx={{
          width: 30,
          height: 30,
          bgcolor: displayColor,
          fontSize: "0.8rem",
          mr: 1.5,
          color: "white",
        }}
      >
        {displayInitials}
      </Avatar>
      <Box>
        <Typography
          variant="subtitle2"
          sx={{
            ...typography.subheader,
            mb: 0.5,
          }}
        >
          {displayAgentType}
        </Typography>
        <Typography
          className="message-text"
          variant="body2"
          sx={{
            ...typography.body,
            lineHeight: 1.4,
          }}
        >
          {message}
        </Typography>
      </Box>
    </Box>
  )
}

const RightPanel = ({
  timelineEvents,
  isPopped,
  onTogglePop,
  position,
  onPositionChange,
  onMessageClick,
}) => {
  const [isDragging, setIsDragging] = useState(false)
  const nodeRef = useRef(null) // Create ref for the draggable component

  // Handle clicking on agent messages
  const handleMessageClick = (message) => {
    // Find the mapping for this message
    const mapping = agentMessageMappings.find((m) => m.message === message)

    if (mapping && onMessageClick) {
      // Pass the mapping information to the parent component
      onMessageClick(mapping)
    }
  }

  // Content of the panel is the same regardless of whether it's popped out
  const PanelContent = () => (
    <Box
      sx={{
        ...components.panel.wrapper,
        width: "100%",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          ...components.panel.header,
          cursor: isPopped ? "move" : "default", // Show move cursor when popped out
          bgcolor: isPopped ? colors.background.highlight : "transparent", // Highlight when popped out
        }}
        className="draggable-handle" // Handle for draggable
      >
        <Typography variant="h6" sx={{ ...typography.header }}>
          AI Huddle
        </Typography>

        <Box>
          <IconButton
            size="small"
            className="fullscreen-button"
            onClick={(e) => {
              e.stopPropagation() // Prevent event bubbling
              if (onTogglePop) {
                onTogglePop()
              }
            }}
            title={isPopped ? "Pop back in" : "Pop out"}
          >
            {isPopped ? (
              <FullscreenExitIcon
                sx={{ fontSize: "1.2rem", color: colors.primary.light }}
              />
            ) : (
              <FullscreenIcon
                sx={{ fontSize: "1.2rem", color: colors.text.secondary }}
              />
            )}
          </IconButton>
          <IconButton size="small">
            <MoreVertIcon
              sx={{ fontSize: "1.2rem", color: colors.text.secondary }}
            />
          </IconButton>
        </Box>
      </Box>

      {/* Message List */}
      <Box
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          px: 2,
          py: 2,
          ...components.scrollbar.thin,
        }}
      >
        {/* Use the actual timeline events data passed as props */}
        {timelineEvents &&
          timelineEvents.map((event) => (
            <AgentMessage
              key={event.id}
              message={event.message}
              agentType={event.agentType}
              agentInitials={event.agentInitials}
              color={event.color}
              onClick={handleMessageClick}
            />
          ))}

        {/* Include the hardcoded messages from agentMessageMappings that have field mappings but are not in timeline events */}
        {agentMessageMappings &&
          agentMessageMappings
            .filter(
              (mapping) =>
                !timelineEvents.some(
                  (event) => event.message === mapping.message
                )
            )
            .map((mapping, index) => (
              <AgentMessage
                key={`mapping-${index}`}
                message={mapping.message}
                onClick={handleMessageClick}
              />
            ))}
      </Box>

      {/* Input Area */}
      <Box
        sx={{
          ...components.panel.footer,
          p: 2,
        }}
      >
        <TextField
          fullWidth
          placeholder="What do you need help with?"
          variant="outlined"
          size="small"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "24px",
              backgroundColor: colors.background.subtle,
              "& fieldset": {
                borderColor: colors.border.light,
              },
            },
            "& .MuiInputBase-input": {
              py: 1.2,
              fontSize: typography.body.fontSize,
              color: colors.text.secondary,
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MicIcon
                  sx={{
                    fontSize: "1.25rem",
                    color: colors.text.tertiary,
                    ml: 0.5,
                  }}
                />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end" size="small">
                  <SendIcon
                    sx={{
                      fontSize: "1.25rem",
                      color: colors.primary.light,
                    }}
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Box>
  )

  // Handle the start of dragging
  const handleStart = () => {
    setIsDragging(true)
  }

  // Handle the end of dragging
  const handleStop = (e, data) => {
    setIsDragging(false)
    if (onPositionChange) {
      onPositionChange({ x: data.x, y: data.y })
    }
  }

  // Prevent event bubbling for click events inside the draggable panel
  const handlePanelClick = (e) => {
    // Ensure clicks inside the panel don't affect parent elements
    e.stopPropagation()
  }

  // When popped out, render a draggable panel
  if (isPopped) {
    return (
      <Draggable
        nodeRef={nodeRef} // Use ref instead of findDOMNode
        position={position}
        handle=".draggable-handle"
        onStart={handleStart}
        onStop={handleStop}
        bounds="parent"
        cancel=".fullscreen-button" // Don't initiate drag on the fullscreen button
      >
        <Box
          ref={nodeRef} // Attach the ref to the Box component
          className="popped-panel"
          onClick={handlePanelClick} // Handle clicks to prevent bubbling
          sx={{
            position: "absolute",
            width: "400px", // Fixed width when popped out
            height: "80%",
            maxHeight: "700px",
            boxShadow: "0 5px 20px rgba(0,0,0,0.15)",
            borderRadius: "8px",
            overflow: "hidden",
            zIndex: 1200, // Ensure it's above other content
            border: "1px solid",
            borderColor: isDragging
              ? colors.primary.light
              : colors.border.medium, // Highlight while dragging
            transition: "border-color 0.3s ease",
            left: position.x === 0 && position.y === 0 ? "20px" : undefined, // Initial position if not set
            top: position.x === 0 && position.y === 0 ? "80px" : undefined, // Initial position if not set
            backgroundColor: "white", // Ensure background is visible
          }}
        >
          <PanelContent />
        </Box>
      </Draggable>
    )
  }

  // When not popped out, render normally
  return <PanelContent />
}

export default RightPanel
