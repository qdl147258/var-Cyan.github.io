//获取弹出框的父级ul
var alertFather=$('.file-tree-container ul')
//获取文件夹父级的box
var folderBox=$('.folder')
folderBox.type='all'


//获取右侧文件列表的父级ul
var filesFather=$('.folder ul:first')

var filesFatherLi=filesFather.find('li')
//获取面包屑的父级div
var breadParent=$('.breadParent')
//右侧文件的数据;
var filesData;

var newFilesData
//初始化pid
var pid=0;
//新建btn
var newBuild=$('.newBuild')
//全选盒子
var allCheckBox=$('.allCheckBox')
//全选框
var allCheck=$('.allCheck')
//全选框的内容
var allCheckContent=$('.allCheck span')
//返回上一层
var backBox=$('.backBox');
//如果右侧没有内容则显示的内容
var smallNewBuild=$('.smallNewBuild');
//
var nameInput=true;

//弹出框外层
var alertWrap=$('.alertWrap')
//遮罩层
var mask=$('.mask')
var n=0;
//新建功能键
var newBuild=$('.newBuild');
//删除功能键
var del=$('.delete')
//复制功能键
var copy=$('.copy')
//移动到功能键
var move=$('.move')
//重命名功能键
var rename=$('.rename')
//文件样式
var fileStyle=$('.listOrGrid')
//移动盒子
var dialogFileTree=$('.dialogFileTree')
//弹出框btn的父级
var dialogFooter=$('.dialog-footer')
//弹出框
var alertBtnBox=$('.alertBtnBox')
//排序父级
var sortBtn=$('.sortBtn')
//排序的ul
var sortBtnUl=sortBtn.find('ul');

//延时定时器
var sortWayTimer=null;

var rightKey=$('.rk')

var leftList=$('.asideMain')

var recoveryData=[]

// var recoveryStatus=false