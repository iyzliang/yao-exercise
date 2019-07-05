var flag = false
setTimeout(() => {
  flag = true
}, 5000)

for(let i = 0; i >= 0; i++) {
  if (flag) {
    break
  } else {
    console.log(i)
  }
}