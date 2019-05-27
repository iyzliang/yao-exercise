function getMonDayAndSunDay (dateValue){
  var arr = dateValue.split("-")
  var date = new Date(dateValue)
  var dateOfWeek = date.getDay()
  // 周日
  if (dateOfWeek === 0) {
    dateOfWeek = 7
  }
  //当前于周末相差的天数
  var aa = 7 - dateOfWeek
  //按10进制转换，以免遇到08和09的时候转换成0  
  var temp2 = parseInt(arr[2],10)
  var sunDay = temp2 + aa
  var monDay = sunDay - 6

  var startDate = new Date(arr[0], arr[1]-1, monDay)
  var endDate = new Date(arr[0], arr[1]-1, sunDay)

  var sm = parseInt(startDate.getMonth()) +1
  var em = parseInt(endDate.getMonth()) +1 

  var start = startDate.getFullYear() + "-" + sm + "-" + startDate.getDate()
  var end = endDate.getFullYear() + "-" + em + "-" + endDate.getDate()  
  var result = new Array()
  result.push(start)
  result.push(end) 
    
  return result
}

// 今天 [ '2019-3-18', '2019-3-24' ]
console.log(getMonDayAndSunDay('2019-03-22'))
// 跨月 跨周 [ '2019-2-25', '2019-3-3' ]
console.log(getMonDayAndSunDay('2019-03-03'))
// 跨年 [ '2018-12-31', '2019-1-6' ]
console.log(getMonDayAndSunDay('2019-01-02'))
// 不标准日期 
console.log(getMonDayAndSunDay('2018-11-03'))
console.log(getMonDayAndSunDay('2018-01-19'))

function getNowFormatDate() {
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  if (month >= 1 && month <= 9) {
      month = '0' + month;
  }
  if (strDate >= 0 && strDate <= 9) {
      strDate = '0' + strDate;
  }
  var currentdate = year + '-' + month + '-' + strDate;
  return currentdate;
}
console.log(getNowFormatDate())