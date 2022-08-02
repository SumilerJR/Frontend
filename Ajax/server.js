// const { urlencoded } = require('express');
const express = require('express');

//创建app实例对象
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + '/src'));

app.get('/test_get', (request, response) => {
    console.log('有人请求test_get了，携带的query参数是', request.query);
    response.send('hello_test_get!!!');
})

app.get('/test_get2/:name/:age', (request, response) => {
    console.log('有人请求test_get2了，携带的params参数是', request.params);
    response.send('hello_test_get2');
})

app.get('/get_person', (request, response) => {
    console.log('有人请求get_person了');
    const person = { name: '老刘', age: '18', sex: '女' };
    response.send(person);
})


app.post('/test_post', (request, response) => {
    console.log('有人请求test_post了', request.body);
    response.send('hello_test_post');
})




app.listen(8080, (err) => {
    if (!err) {
        console.log('测试ajax请求的服务器开启成功了！测试地址如下：');
        console.log('http://127.0.0.1:8080/1_ajax小试牛刀.html');
        console.log('http://127.0.0.1:8080/2_xhr的5种状态.html');
        console.log('http://127.0.0.1:8080/3_ajax_get请求.html');
        console.log('http://127.0.0.1:8080/4_ajax_post请求.html');
        console.log('http://127.0.0.1:8080/5_ajax_解析json数据.html');
    }

})