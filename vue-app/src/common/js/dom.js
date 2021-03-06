function hasClass(el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}

export function addClass(el, className) {
  if (hasClass(el, className)) {
    return false
  }

  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

export function getData(el, name, val) {
  let anchor = 'data-'
  let prop = anchor + name

  if (val) {
    return el.setAttribute(prop, val)
  } else {
    return el.getAttribute(prop)
  }
}
