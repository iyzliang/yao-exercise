require('./index.css')
import { cube } from './math'

function component () {
  var element = document.createElement('div')

  element.innerHTML = `Hello World! ${cube(3)}`

  return element
}

document.body.appendChild(component())