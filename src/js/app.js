import {
  groupBy
}
from 'lodash/collection'

const people = [{
  manager: 'Jen',
  name: 'Bob'
}, {
  manager: 'Jen',
  name: 'Sue'
}, {
  manager: 'Bob',
  name: 'Shirley'
}, {
  manager: 'Bob',
  name: 'Terrence'
}]

const managerGroups = groupBy(people, 'manager')

const root = document.querySelector('#root')
const dateTime = document.querySelector('#date-time').innerHTML = new Date()
root.innerHTML = `<pre>${JSON.stringify(managerGroups, null, 2)}</pre>`
