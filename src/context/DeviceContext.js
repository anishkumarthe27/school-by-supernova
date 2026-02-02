import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import {
  getDeviceFromWidth,
  getDeviceInfo,
  getCapabilities,
  BREAKPOINTS,
  DEVICE_LABELS,
} from '../config/deviceDetection';

const defaultState = {
  type: 'desktop',
  isMobile: false,
  isTablet: false,
  isDesktop: true,
  viewport: { width: 1024, height: 768 },
  capabilities: getCapabilities(),
  uaHint: 'desktop',
  confidence: 'medium',
  breakpoints: BREAKPOINTS,
  labels: DEVICE_LABELS,
};

const DeviceContext = createContext(defaultState);

function DeviceProvider({ children }) {
  const [deviceState, setDeviceState] = useState(() => {
    if (typeof window === 'undefined') return defaultState;
    return getDeviceInfo();
  });

  useEffect(() => {
    const update = () => setDeviceState(getDeviceInfo());

    update();
    window.addEventListener('resize', update);
    window.addEventListener('orientationchange', update);

    return () => {
      window.removeEventListener('resize', update);
      window.removeEventListener('orientationchange', update);
    };
  }, []);

  const value = useMemo(
    () => ({
      ...deviceState,
      /** Recommended view: e.g. 'compact' on mobile */
      recommendedView: deviceState.type === 'mobile' ? 'compact' : 'full',
      /** UI hints for layout (sidebar default, grid columns, etc.) */
      uiHints: {
        sidebarDefaultCollapsed: deviceState.isMobile,
        maxGridColumns: deviceState.isMobile ? 1 : deviceState.isTablet ? 2 : 4,
        showCompactTable: deviceState.isMobile,
      },
    }),
    [deviceState]
  );

  return (
    <DeviceContext.Provider value={value}>
      {children}
    </DeviceContext.Provider>
  );
}

function useDevice() {
  const context = useContext(DeviceContext);
  if (!context) {
    return defaultState;
  }
  return context;
}

export { DeviceProvider, useDevice, defaultState };
export default DeviceContext;
