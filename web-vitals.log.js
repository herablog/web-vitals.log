import { getCLS, getFID, getLCP } from 'https://unpkg.com/web-vitals?module';

// Core Web Vitals thresholds
// Currently supports Core Web Vitals 2020
const THRESHOLD = {
  LCP: 2500,
  FID: 100,
  CLS: 0.1
}

/**
 * Report metrics to console
 * @param {boolean} exceededThreshold
 * @param {...any} messages
 */
function report(exceededThreshold, ...messages) {
  const logLevel = exceededThreshold ? 'warn' : 'info';
  console[logLevel]('\u23f1 Web Vitals Log:', ...messages);
}

/**
 * @typedef Metric
 * @type {{ name: 'CLS'|'FCP'|'FID'|'LCP'|'TTFB', value: number, delta: number, id: string, isFinal: boolean, entries: PerformanceEntry }}
 */

/**
 * CLS report handler
 * @param {Metric} metric
 */
function handleCLSReport({ name, delta, value, entries }) {
  const exceededThreshold = value > THRESHOLD[name];
  const message = exceededThreshold ?
    ['Too many layout shifts', value.toFixed(3), entries] :
    ['Layout shift happens', delta.toFixed(3), entries];

  report(exceededThreshold, ...message);
}

/**
 * Timing metrics report handler
 * @param {Metric} metric
 */
function handleTimingReport({ delta, entries, name }) {
  const exceededThreshold = delta > THRESHOLD[name];
  const label = exceededThreshold ? 'Slow' : 'Good';
  const time = THRESHOLD[name] >= 1000 ?
    `${(delta / 1000).toFixed(2)}s` :
    `${delta.toFixed(2)}ms`;

  report(exceededThreshold, label, name, time, entries);
}

window.addEventListener('load', () => {
  getCLS(handleCLSReport, true);
  getFID(handleTimingReport);
  getLCP(handleTimingReport);
});
