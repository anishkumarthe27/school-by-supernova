/**
 * Client-side device detection config.
 * No external packages – uses window width, UA, and capability APIs.
 */

/** Breakpoints (px) – align with common responsive breakpoints */
export const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  // desktop: > 1024
};

/** Device type labels for UI */
export const DEVICE_LABELS = {
  mobile: 'Mobile',
  tablet: 'Tablet',
  desktop: 'Desktop',
};

/**
 * Infer device type from viewport width.
 * Primary strategy: responsive and updates on resize.
 */
export function getDeviceFromWidth(width) {
  if (width < BREAKPOINTS.mobile) return 'mobile';
  if (width < BREAKPOINTS.tablet) return 'tablet';
  return 'desktop';
}

/**
 * Parse user-agent for device hint (fallback / confidence).
 * Lightweight regex – no UA parser package.
 */
export function parseUserAgent(ua = typeof navigator !== 'undefined' ? navigator.userAgent : '') {
  const u = ua.toLowerCase();
  const mobile = /mobile|android|webos|iphone|ipod|blackberry|iemobile|opera mini/i.test(u);
  const tablet =
    /ipad|tablet|playbook|silk|kindle|(android(?!.*mobile))|nexus (7|9|10)/i.test(u) ||
    (mobile && /android/i.test(u) && !/mobile/i.test(u));
  if (tablet) return { type: 'tablet', source: 'ua' };
  if (mobile) return { type: 'mobile', source: 'ua' };
  return { type: 'desktop', source: 'ua' };
}

/**
 * Detect client capabilities (touch, connection, screen, etc.).
 */
export function getCapabilities() {
  if (typeof window === 'undefined') {
    return {
      touch: false,
      pixelRatio: 1,
      screenSize: { width: 1024, height: 768 },
      connection: 'unknown',
      reducedMotion: false,
      prefersDark: false,
    };
  }
  const nav = navigator;
  const connection =
    nav.connection?.effectiveType ||
    nav.connection?.type ||
    (nav.onLine ? 'unknown' : 'offline');
  return {
    touch: 'ontouchstart' in window || nav.maxTouchPoints > 0,
    pixelRatio: window.devicePixelRatio || 1,
    screenSize: {
      width: window.screen.width,
      height: window.screen.height,
    },
    connection,
    reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    prefersDark: window.matchMedia('(prefers-color-scheme: dark)').matches,
  };
}

/**
 * Full device info: type from width (primary), UA hint, capabilities.
 */
export function getDeviceInfo() {
  const width =
    typeof window !== 'undefined' ? window.innerWidth : BREAKPOINTS.tablet + 1;
  const typeFromWidth = getDeviceFromWidth(width);
  const uaHint = parseUserAgent();
  const capabilities = getCapabilities();

  return {
    type: typeFromWidth,
    typeFromWidth,
    uaHint: uaHint.type,
    confidence: typeFromWidth === uaHint.type ? 'high' : 'medium',
    capabilities,
    viewport: { width, height: typeof window !== 'undefined' ? window.innerHeight : 768 },
    isMobile: typeFromWidth === 'mobile',
    isTablet: typeFromWidth === 'tablet',
    isDesktop: typeFromWidth === 'desktop',
  };
}

export default {
  BREAKPOINTS,
  DEVICE_LABELS,
  getDeviceFromWidth,
  parseUserAgent,
  getCapabilities,
  getDeviceInfo,
};
