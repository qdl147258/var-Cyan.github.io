class SetData{
	constructor(data){
		this.data=data;
	}
	//转化kb
  compare(size){
    if(size=='-'){
      return '-';
    }
    if(size>0 && size<2013){
      return size+'KB'
    }
    if(size>=Math.pow(1024,1) && size<Math.pow(1024,2)){
      return Number.parseInt((size/Math.pow(1024,1)).toFixed(2))+'MB';
    }
    if(size>=Math.pow(1024,2) && size<Math.pow(1024,3)){
      return Number.parseInt((size/Math.pow(1024,2)).toFixed(2))+'GB';
    }
    if(size>=Math.pow(1024,3) && size<Math.pow(1024,4)){
      return Number.parseInt((size/Math.pow(1024,3)).toFixed(2))+'TB';
    }

  }

	//创建弹出框的树状菜单
	createTree(data,id){
		let tree='';
		let _this=this;
		// <i class="wjb"></i>
		for(var i=0;i<data.length;i++){
			if(!data[i].checked && !data[i].del && (data[i].type=='folder'||'root')){
				tree+=`<li data-id=${data[i].id}>

				<i class=${data[i].child.length!=0?'sjx':''}></i>
						<span class=${data[i].id===id? 'active':''}>

							
							${data[i].name}
						</span>`;
				tree+= data[i].child ? `<ul>${_this.createTree(data[i].child,id)}</ul>` : '';		
				tree+=`</li>`;
			}

		}
		return tree;
	}
	//创建右侧文件列表
	createFiles(data,isDel){
		let file='';
		let _this=this;
		if(!data){
			return file;
		}

		var condition;

		for(var i=0;i<data.length;i++){
			condition = isDel ? data[i].del : !data[i].del;

			if(condition){
				file +=`<li data-id=${data[i].id} data-type=${data[i].type} data-del=${data[i].del}>

					<i class="checkbox"></i>
					<span class="folderimg"><img src="./img/${data[i].type}.png" ></span>
					<a class="foldername" href="javascript:;">${data[i].name}</a>
					<div class="more">
						<span>${_this.compare(data[i].size)}</span>
						<time>${data[i].time}</time>
					</div>
					<form class="change-foldername ${data[i].name?'':'active'}">
						<input type="text" class="change" >
					</form>
				</li>`;
			}

		}
			return file
	}
	// 创建面包屑导航
	createbread(data,id){
		let bread = '';
		for(var i=0;i<data.length;i++){
			bread =`<div class="fl" data-id=${data[i].id}>
			${data[i].id!=0?'<i>></i>':''}
			<a href="javascript:;" data-id=${data[i].id}>
				
				${data[i].name}	
				<span class="bottomLine"></span></div>
			</a>${bread}`
		}
		// console.log(id)
		return bread
	}

}

