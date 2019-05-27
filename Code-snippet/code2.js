function kai (list) {
  if (list.length < 2) {
    return list
  }
  let min = list.splice(Math.floor(list.length / 2), 1)[0]
  let left = []
  let right = []
  for (let index = 0; index < list.length; index++) {
    if (list[index] <= min) {
      left.push(list[index])
    } else {
      right.push(list[index])
    }
  }
  return kai(left).concat([min], kai(right))
}

console.log(kai([1212, 121, 1121, 1221]))
