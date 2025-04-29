/**
 * Common styling declarations for consistent UI across components
 * This file centralizes frequently used styling values
 */

// Color palette
export const colors = {
  // Primary UI colors
  primary: {
    main: "#3f87f5",
    light: "#6095f0",
    dark: "#1a73e8",
    hover: "#3b7de5",
  },
  // Feedback colors
  success: "#4caf50",
  warning: "#ffb74d",
  error: "#d14343",
  info: "#90caf9",
  // Background colors
  background: {
    default: "#f5f5f5",
    paper: "#ffffff",
    subtle: "#f9f9f9",
    highlight: "#f0f7ff",
  },
  // Text colors
  text: {
    primary: "#333333",
    secondary: "#666666",
    tertiary: "#999999",
  },
  // Border colors
  border: {
    light: "rgba(0, 0, 0, 0.06)",
    medium: "rgba(0, 0, 0, 0.08)",
    highlight: "#c2d6f7",
  },
}

// Typography styles
export const typography = {
  header: {
    fontSize: "0.95rem",
    fontWeight: 600,
    color: colors.text.primary,
  },
  subheader: {
    fontSize: "0.9rem",
    fontWeight: 600,
    color: colors.text.primary,
  },
  body: {
    fontSize: "0.85rem",
    fontWeight: 400,
    color: colors.text.secondary,
  },
  label: {
    fontSize: "0.85rem",
    fontWeight: 600,
    color: colors.text.primary,
  },
  value: {
    fontSize: "0.85rem",
    fontWeight: 500,
    color: colors.text.primary,
  },
  caption: {
    fontSize: "0.8rem",
    fontWeight: 400,
    color: colors.text.tertiary,
  },
}

// Layout values
export const layout = {
  borderRadius: "4px",
  panelPadding: 2,
  headerPadding: {
    x: 2,
    y: 1.5,
  },
  contentPadding: {
    x: 2,
    y: 2,
  },
}

// Common component styles
export const components = {
  panel: {
    wrapper: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      bgcolor: colors.background.paper,
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom: `1px solid ${colors.border.medium}`,
      py: layout.headerPadding.y,
      px: layout.headerPadding.x,
      flexShrink: 0,
    },
    content: {
      flexGrow: 1,
      overflowY: "auto",
      px: layout.contentPadding.x,
      py: layout.contentPadding.y,
    },
    footer: {
      borderTop: `1px solid ${colors.border.medium}`,
      py: layout.headerPadding.y,
      px: layout.headerPadding.x,
      flexShrink: 0,
    },
  },
  formField: {
    wrapper: {
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      mb: 2,
      width: "100%",
    },
    label: {
      width: "25%",
      pt: 1.3,
    },
    value: {
      width: "100%",
      py: 1.3,
      px: 1.5,
      bgcolor: colors.background.subtle,
      border: `1px solid ${colors.border.light}`,
      borderRadius: layout.borderRadius,
      transition: "background-color 0.2s ease, border-color 0.2s ease",
    },
    valueHighlighted: {
      bgcolor: colors.background.highlight,
      borderColor: colors.border.highlight,
    },
  },
  accordion: {
    wrapper: {
      mb: 0,
      boxShadow: "none",
      borderBottom: `1px solid ${colors.border.medium}`,
      bgcolor: colors.background.paper,
    },
    header: {
      minHeight: 44,
      py: 0.75,
      px: 2,
      bgcolor: "rgba(0, 0, 0, 0.02)",
    },
  },
  // Custom scrollbar styles
  scrollbar: {
    thin: {
      // Firefox
      scrollbarWidth: "thin",
      scrollbarColor: `${colors.border.medium} transparent`,
      // Chrome, Safari and Edge
      "&::-webkit-scrollbar": {
        width: "6px",
        height: "6px",
      },
      "&::-webkit-scrollbar-track": {
        background: "transparent",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: colors.border.medium,
        borderRadius: "4px",
      },
      "&::-webkit-scrollbar-thumb:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.2)",
      },
    },
  },
}
