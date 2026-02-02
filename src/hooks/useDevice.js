export { useDevice } from '../context/DeviceContext';

/**
 * useDevice() returns:
 * - type: 'mobile' | 'tablet' | 'desktop'
 * - isMobile, isTablet, isDesktop
 * - viewport: { width, height }
 * - capabilities: { touch, pixelRatio, screenSize, connection, reducedMotion, prefersDark }
 * - recommendedView: 'compact' | 'full'
 * - uiHints: { sidebarDefaultCollapsed, maxGridColumns, showCompactTable }
 */
