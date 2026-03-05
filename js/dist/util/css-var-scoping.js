/*!
  * Bootstrap css-var-scoping.js v5.3.8 (https://getbootstrap.com/)
  * Copyright 2011-2026 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap css-var-scoping.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   *
   * Tooltip/popover scoping — copies --bs-* custom properties from the
   * trigger's themed ancestor to the tip (which lives in <body>).
   */

  const PREFIX = '--bs-';
  function scopeTip(event) {
    const tipId = event.target.getAttribute('aria-describedby');
    const tip = tipId ? document.getElementById(tipId) : null;
    if (!tip) {
      return;
    }
    const source = event.target.closest('[data-bs-theme-scope]');
    if (!source) {
      return;
    }
    const style = getComputedStyle(source);
    const rootStyle = getComputedStyle(document.documentElement);
    for (const prop of style) {
      if (!prop.startsWith(PREFIX)) {
        continue;
      }
      const value = style.getPropertyValue(prop).trim();
      if (value !== rootStyle.getPropertyValue(prop).trim()) {
        tip.style.setProperty(prop, value);
      }
    }
  }
  document.addEventListener('inserted.bs.tooltip', scopeTip);
  document.addEventListener('inserted.bs.popover', scopeTip);

}));
//# sourceMappingURL=css-var-scoping.js.map
