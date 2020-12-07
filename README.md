# `web-vitals.log` (alpha)
Wrapper of [GoogleChrome/web-vitals](https://github.com/GoogleChrome/web-vitals).

This script measures [Core Web Vitals](https://web.dev/vitals/) and outputs the result to console while you are using sites.

In Core Web Vitals, runtime values are important, so developers need to use sites in a natural way. They should scroll down to collect "cumulative" layout shifts, and sometimes should tap an element below the fold for FID.

The values can be displayed as warning when exceeding its thresholds.

![FID, CLP and Layout shift values is displaying in console. The value can be displayed as warning when exceeding thresholds.](https://github.com/herablog/web-vitals.log/raw/main/screenshots/logs.png)

You can also see the specific element name with the value. This can be helpful for developers to inspect the reason of the result.

![Specific element for LCP is displaying in console](https://github.com/herablog/web-vitals.log/raw/main/screenshots/element.png)

## Usage

### Development
This script can load via JavaScript module. 

```html
<script type="module" src="https://unpkg.com/@herablog/web-vitals.log@0.2.0/web-vitals.log.js"></script>
```

### Production
Browser extension like [Custom JavaScript for websites](https://chrome.google.com/webstore/detail/custom-javascript-for-web/poakhlngfciodnhlhhgnaaelnpjljija) may be useful when you track the metrics in production.

![Load script with "import('https://unpkg.com/@herablog/web-vitals.log@0.2.0/web-vitals.log.js');" in Custom JavaScript for websites](https://github.com/herablog/web-vitals.log/raw/main/screenshots/extension.png)
