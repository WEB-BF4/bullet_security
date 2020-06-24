import Mock from 'mockjs'

let someData = Mock.mock({
    'dataSource|5':[{
        'Cargo_id|+1': 1,
        'Cargo_name|1':['监视摄像头', '拟态机器人', '脉冲弹药', '暂用型医疗包', 'ak47'],
        'Cargo_num|10-100': 1
    }]
})

console.log(someData)
