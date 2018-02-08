var fs = require('fs');        //引用fs模块

var dirName = process.argv[2]; //获取目录名称

var htmlData = '<!DOCTYPE>\n<title>Hello</title>\n<h1>Hi</h1>', //html data
    cssData = 'h1{color: red;}', 				//css data
    jsData = 'var string = "Hello World"\nalert(string)'; 	//js data

fs.mkdirSync('./' + dirName);  //创建目录
process.chdir('./' + dirName); //进入目录
fs.mkdirSync('css'), 	       //创建css目录
fs.mkdirSync('js');   	       //创建js目录

fs.writeFileSync('./index.html', htmlData);	//创建index.html
fs.writeFileSync('./css/style.css', cssData);	//创建css/style.css
fs.writeFileSync('./js/main.js', jsData);	//创建js/main.js

process.exit(0);
