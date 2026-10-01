import { createTheme } from "@mui/material/styles";
import { Direction } from "@/types/site";

export function createAppTheme(direction: Direction) {
  const isRtl = direction === "rtl";

  return createTheme({
    direction,
    cssVariables: true,
    palette: {
      mode: "dark",
      background: {
        default: "#0D0F12",
        paper: "#1A1D20",
      },
      primary: {
        main: "#E8DDC9",
        contrastText: "#0D0F12",
      },
      secondary: {
        main: "#E8DDC9",
      },
      text: {
        primary: "#F5F5F2",
        secondary: "#9CA3AF",
      },
      divider: "#2A2E33",
    },
    shape: {
      borderRadius: 12,
    },
    typography: {
      fontFamily:
        isRtl
          ? "var(--font-cairo), var(--font-inter), Arial, sans-serif"
          : "var(--font-inter), var(--font-cairo), Arial, sans-serif",
      fontSize: 16,
      body1: { fontSize: "1rem", lineHeight: isRtl ? 1.85 : 1.72 },
      body2: { fontSize: "0.92rem", lineHeight: isRtl ? 1.75 : 1.62 },
      h1: {
        fontSize: "clamp(1.85rem, 7vw, 3.35rem)",
        fontWeight: 750,
        letterSpacing: 0,
        lineHeight: isRtl ? 1.38 : 1.12,
      },
      h2: {
        fontSize: "clamp(1.7rem, 5.8vw, 2.55rem)",
        fontWeight: 740,
        letterSpacing: 0,
        lineHeight: isRtl ? 1.36 : 1.16,
      },
      h3: {
        fontSize: "clamp(1.45rem, 5vw, 2.15rem)",
        fontWeight: 730,
        letterSpacing: 0,
        lineHeight: isRtl ? 1.38 : 1.2,
      },
      h4: { fontSize: "clamp(1.25rem, 3.5vw, 1.65rem)", fontWeight: 720, letterSpacing: 0, lineHeight: 1.32 },
      h5: { fontSize: "clamp(1.1rem, 3vw, 1.35rem)", fontWeight: 700, letterSpacing: 0, lineHeight: 1.45 },
      h6: { fontSize: "1.02rem", fontWeight: 700, letterSpacing: 0, lineHeight: 1.45 },
      button: { fontWeight: 700, textTransform: "none", letterSpacing: 0, lineHeight: 1.35 },
    },
    components: {
      MuiContainer: {
        styleOverrides: {
          root: {
            paddingInline: "var(--page-pad-xs)",
            "@media (min-width:600px)": {
              paddingInline: "var(--page-pad-sm)",
            },
            "@media (min-width:1200px)": {
              paddingInline: "var(--page-pad-lg)",
            },
          },
        },
      },
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            background:
              "radial-gradient(circle at 18% 10%, rgba(232,221,201,0.05), transparent 26rem), radial-gradient(circle at 82% 18%, rgba(232,221,201,0.035), transparent 24rem), radial-gradient(circle at 50% 100%, rgba(255,255,255,0.03), transparent 28rem), #0D0F12",
          },
          "::selection": {
            background: "#E8DDC9",
            color: "#0D0F12",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            minHeight: 44,
            minWidth: 44,
            whiteSpace: "normal",
            transition: "all 180ms ease",
            border: "1px solid #2A2E33",
          },
          contained: {
            backgroundColor: "#E8DDC9",
            color: "#0D0F12 !important",
            boxShadow: "none",
            "& .MuiButton-startIcon, & .MuiButton-endIcon": {
              color: "inherit",
            },
            "&:hover": {
              backgroundColor: "#F2EAD9",
              color: "#0D0F12 !important",
              boxShadow: "none",
            },
            "&:focus-visible, &:active": {
              color: "#0D0F12 !important",
            },
          },
          outlined: {
            color: "#F5F5F2",
            borderColor: "#2A2E33",
            backgroundColor: "transparent",
            "&:hover": {
              color: "#0D0F12",
              borderColor: "#3A3F45",
              backgroundColor: "#F2EAD9",
            },
          },
          text: {
            color: "rgba(255,255,255,0.75)",
            "&:hover": {
              color: "#fff",
              backgroundColor: "transparent",
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            border: "1px solid #2A2E33",
            backgroundImage: "none",
          },
        },
      },
    },
  });
}
