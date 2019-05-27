function deepClone(source){
   if(!source || typeof source !== 'object'){
     throw new Error('error arguments', 'shallowClone');
   }
   var targetObj = source.constructor === Array ? [] : {};
   for(var keys in source){
      if(source.hasOwnProperty(keys)){
         if(source[keys] && typeof source[keys] === 'object'){
           targetObj[keys] = source[keys].constructor === Array ? [] : {};
           targetObj[keys] = deepClone(source[keys]);
         }else{
           targetObj[keys] = source[keys];
         }
      } 
   }
   return targetObj;
}

let list = [
  {
    "id": 796,
    "user_info": {
        "id": 2591,
        "first_name": "微信测试"
    },
    "item_info": {
        "barcode": "83372200048691245421",
        "foreign_item_id": "3024125",
        "item_name": "#奥特蛋巧克力豆"
    },
    "img": "",
    "img_created_text": "---",
    "lat": null,
    "lng": null,
    "delivery_code": "43-1000642-20190121",
    "address": "",
    "delivery_date_text": "2019-01-21 00:00",
    "status_decs": "未提交",
    "overdue_desc": "已过期",
    "status": 0,
    "is_overdue": false,
    "img_status": 0,
    "img_status_text": "未提交"
  },
  {
    "id": 795,
    "user_info": {
        "id": 2591,
        "first_name": "微信测试"
    },
    "item_info": {
        "barcode": "6920174764093",
        "foreign_item_id": "3007956",
        "item_name": "#益达至尊无糖口香糖40粒"
    },
    "img": "",
    "img_created_text": "---",
    "lat": null,
    "lng": null,
    "delivery_code": "43-1000642-20190121",
    "address": "",
    "delivery_date_text": "2019-01-21 00:00",
    "status_decs": "未提交",
    "overdue_desc": "已过期",
    "status": 0,
    "is_overdue": false,
    "img_status": 0,
    "img_status_text": "未提交"
  }
]

console.log(deepClone(list))