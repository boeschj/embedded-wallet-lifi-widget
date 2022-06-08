/* eslint-disable no-constant-condition */
import { LiFiWidget, LiFiWidgetDrawer, WidgetConfig } from '@lifi/widget';
import {
  Box,
  Checkbox,
  CssBaseline,
  Drawer,
  FormControlLabel,
  Slider,
  Switch,
  TextField,
  Tooltip,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import { reportWebVitals } from './reportWebVitals';

function ValueLabelComponent({
  children,
  value,
}: {
  children: React.ReactElement;
  value: number;
}) {
  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Failed to find the root element.');
}
const root = createRoot(rootElement);

const widgetDrawerConfig: WidgetConfig = {
  fromChain: 'pol',
  toChain: 'bsc',
  // fromToken: '0x0000000000000000000000000000000000000000',
  // toToken: '0xcc42724c6683b7e57334c4e856f4c9965ed682bd',
  // disableColorSchemes: true,
};

const widgetConfig: WidgetConfig = {
  ...widgetDrawerConfig,
  containerStyle: {
    width: 392,
    height: 640,
    border: `1px solid ${
      window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'rgb(66, 66, 66)'
        : 'rgb(234, 234, 234)'
    }`,
    borderRadius: '16px',
    display: 'flex',
    maxWidth: 392,
  },
};

const App = () => {
  const [drawer, setDrawer] = useState(false);
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [config, setConfig] = useState(widgetConfig);
  const [fontFamily, setFontFamily] = useState('Inter var, Inter, sans-serif');
  const [borderRadius, setBorderRadius] = useState(12);
  const [borderRadiusSecondary, setBorderRadiusSecondary] = useState(6);
  const [primary, setPrimaryColor] = useState('#3F49E1');
  const [secondary, setSecondaryColor] = useState('#F5B5FF');
  const [darkMode, setDarkMode] = useState(prefersDarkMode);
  const [systemColor, setSystemColor] = useState(true);
  const [theme, setTheme] = useState(() =>
    createTheme({
      palette: {
        mode: (systemColor && prefersDarkMode) || darkMode ? 'dark' : 'light',
        primary: {
          main: '#3F49E1',
        },
        secondary: {
          main: '#F5B5FF',
        },
        background: {
          default:
            (systemColor && prefersDarkMode) || darkMode ? '#000' : '#F4F5F6',
        },
      },
    }),
  );

  useEffect(() => {
    setConfig(() => ({
      ...(drawer
        ? widgetDrawerConfig
        : {
            ...widgetConfig,
            appearance: systemColor ? 'auto' : darkMode ? 'dark' : 'light',
            containerStyle: {
              ...widgetConfig.containerStyle,
              border: `1px solid ${
                (systemColor && prefersDarkMode) || darkMode
                  ? 'rgb(66, 66, 66)'
                  : 'rgb(234, 234, 234)'
              }`,
            },
          }),
      theme: {
        palette: {
          primary: {
            main: primary,
          },
          secondary: {
            main: secondary,
          },
        },
        shape: {
          borderRadius,
          borderRadiusSecondary,
        },
        typography: {
          fontFamily,
        },
      },
    }));
  }, [
    borderRadius,
    borderRadiusSecondary,
    darkMode,
    drawer,
    fontFamily,
    prefersDarkMode,
    primary,
    secondary,
    systemColor,
  ]);

  useEffect(() => {
    setTheme(
      createTheme({
        palette: {
          mode: (systemColor && prefersDarkMode) || darkMode ? 'dark' : 'light',
          primary: {
            main: primary,
          },
          secondary: {
            main: secondary,
          },
          background: {
            default:
              (systemColor && prefersDarkMode) || darkMode ? '#000' : '#F4F5F6',
          },
        },
      }),
    );
    if (systemColor) {
      setDarkMode(systemColor && prefersDarkMode);
    }
  }, [darkMode, prefersDarkMode, primary, secondary, systemColor]);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Drawer
          sx={{
            width: 320,
            '& .MuiDrawer-paper': {
              width: 320,
              boxSizing: 'border-box',
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Box p={2} flex={1}>
            <Typography px={1} mb={2} variant="h6">
              Widget Customization
            </Typography>
            <Box px={1} flex={1}>
              <FormControlLabel
                control={
                  <Switch
                    checked={drawer}
                    onChange={() => setDrawer((drawer) => !drawer)}
                  />
                }
                label="Enable drawer view"
              />
            </Box>
            <Box p={1} flex={1}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={systemColor}
                    onChange={() => setSystemColor((system) => !system)}
                  />
                }
                label="Auto"
              />
              <FormControlLabel
                control={
                  <Switch
                    disabled={systemColor}
                    checked={darkMode}
                    onChange={() => setDarkMode((dark) => !dark)}
                  />
                }
                label="Dark theme"
              />
            </Box>
            <Box px={1} pt={1} flex={1}>
              <Typography gutterBottom>Border Radius</Typography>
              <Slider
                valueLabelDisplay="auto"
                components={{
                  ValueLabel: ValueLabelComponent,
                }}
                max={32}
                value={borderRadius}
                onChange={(_, value) => setBorderRadius(value as number)}
                sx={{ width: '100%' }}
              />
            </Box>
            <Box p={1} flex={1}>
              <Typography gutterBottom>Border Radius Secondary</Typography>
              <Slider
                valueLabelDisplay="auto"
                components={{
                  ValueLabel: ValueLabelComponent,
                }}
                max={32}
                value={borderRadiusSecondary}
                onChange={(_, value) =>
                  setBorderRadiusSecondary(value as number)
                }
                sx={{ width: '100%' }}
              />
            </Box>
            <Box p={1}>
              <TextField
                value={fontFamily}
                label="Font Family"
                helperText="Should be loaded apart or has OS support"
                size="small"
                onChange={(event) => setFontFamily(event.target.value)}
                fullWidth
              />
            </Box>
            <Box py={2} px={1}>
              <TextField
                value={primary}
                label="Main Color"
                type="color"
                size="small"
                onChange={(event) => setPrimaryColor(event.target.value)}
                fullWidth
              />
            </Box>
            <Box py={2} px={1}>
              <TextField
                value={secondary}
                label="Secondary Color"
                type="color"
                size="small"
                onChange={(event) => setSecondaryColor(event.target.value)}
                fullWidth
              />
            </Box>
          </Box>
        </Drawer>
        <Box
          sx={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}
        >
          {drawer ? (
            <LiFiWidgetDrawer config={config} open />
          ) : (
            <LiFiWidget config={config} />
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

root.render(
  <React.StrictMode>
    {true ? (
      <BrowserRouter>
        <Routes>
          <Route path="/home/*" element={<App />} />
        </Routes>
      </BrowserRouter>
    ) : (
      <App />
    )}
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
if (process.env.NODE_ENV === 'development') {
  reportWebVitals(console.log);
}
