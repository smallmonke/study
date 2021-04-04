//当前电脑会去查找环境变量
//npm ->node package manager(不要使用cnpm 安装模块时 无法锁定版本)
//nrm use taobao

//依赖关系（开发依赖 生产依赖 同等依赖）

//npm 5.2之后会把共同的模块拍平
//如果直接用npm run script的方式 默认在执行命令前，会将环境变量
//

//版本号 管理的方式 课件上有
//^2.2.4 = 第一位只能是2
//~2.2.4  只能MAJOR 
// <= >=
//npm version major 升级版本号
//npm version patch
//配合git tag使用 beta(公开测试版) rc()最终测试版本
//2.1.0-beta.1 这样声明版本 用户不会立马使用 可以用来测试 

//测试 如果更改了 package.json 会同步给 ->lock文件

//作用域包@vue....
//npm addUser username ....
//包的发布 1需要看包的名字是重名
//2切换到本地npm源
//3 登陆账号 发布

//yarn mongorepo

//模板引擎的实现
// events模块的实现 发布订阅
//任务：回去试一试发包