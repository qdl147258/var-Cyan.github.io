
class ViewData{
	constructor(data){
		this.data=data;
	}
	//生成移动/复制的树状菜单
	proTree(data, id,aaa){
		//初始化移动/复制页面
	  	let leftTree = setDataClass.createTree(data, id);
	  	alertFather.html(leftTree)
	}

	//生成右侧文件夹/列表
	profiles(data, id){
		//初始化右侧页面
		filesFather.html('');

		let datas = dealDataClass.getChildrenById(data,id);
	  	let fileshtml = setDataClass.createFiles(datas);
		filesFather.html(fileshtml);
		
		return datas
	}

	//生成面包屑
	probreads(data,id){
	// if(id!=0){
		//初始化面包屑导航 当id为0时 不显示
		breadParent.html('');
		let bread = dealDataClass.getParentsById(data, id);
		let breads = setDataClass.createbread(bread,id);
		breadParent.html(breads);
		// }
	}
}



