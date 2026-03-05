/**
 * --------------------------------------------------------------------------
 * Bootstrap css-var-scoping.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 *
 * Tooltip/popover scoping — copies --bs-* custom properties from the
 * trigger element to the tip (which lives in <body>).
 */

const PREFIX = '--bs-'

function scopeTip(event) {
  const tipId = event.target.getAttribute('aria-describedby')
  const tip = tipId ? document.getElementById(tipId) : null
  if (!tip) {
    return
  }

  const style = getComputedStyle(event.target)
  const rootStyle = getComputedStyle(document.documentElement)

  for (const prop of style) {
    if (!prop.startsWith(PREFIX)) {
      continue
    }

    const value = style.getPropertyValue(prop).trim()
    if (value !== rootStyle.getPropertyValue(prop).trim()) {
      tip.style.setProperty(prop, value)
    }
  }
}

document.addEventListener('inserted.bs.tooltip', scopeTip)
document.addEventListener('inserted.bs.popover', scopeTip)
