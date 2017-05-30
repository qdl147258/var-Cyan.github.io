//点击面包屑内容生成对应子集的内容
breadParent.on('click','a',function(e){
	// console.log(111)
	fun.clickGoIn($(this))
		//功能键隐藏/显示
	tool.funKeyShowOrHide()

})
// !data[i].del
//点击文件夹 生成对应子集的内容
filesFather.on('click','li',function(e){
	if( $(this).data('type') !== 'folder' || $(this).data('del')){
	 	return
	}
	// console.log('进入文件夹')
		fun.clickGoIn($(this),true)
			//功能键隐藏/显示
		tool.funKeyShowOrHide()
	// }

	


})
//单选功能
filesFather.on('click','i',function(e){
	if(nameInput){
		//执行单选
		fun.selfcheck($(this))
		//功能键隐藏/显示
		tool.funKeyShowOrHide()
		//console.log(filesData)
		return false
	}

})
//
filesFather.on('click','.foldername',function(e){
	
	return false
})
//返回上一层
backBox.on('click',fun.backFather)

//全选功能
allCheck.on('click',function(){
	console.log(filesData)
	console.log(folderBox.type)
	if(filesData&&filesData.length==0){
		// alertfun('没有可选项')
		alert('没有可选项')
		return
	}
	if(nameInput){
		
		fun.allcheckevent($(this));
		//功能键隐藏/显示
		tool.funKeyShowOrHide()
	}
})
newBuild.on('click',function(){
	
	
})
//删除功能
del.on('click',function(){
	fun.deletekey(true)
	//功能键隐藏/显示
	tool.funKeyShowOrHide()
	//console.log(filesData)
})
//切换文件样式
fileStyle.on('click',function(){
	$(this).toggleClass('list')
	// if($(this).hasClass('list')){
		console.log(filesFather)
		filesFather[filesFather.hasClass('listfile')?'addClass':'removeClass']('folders')
		filesFather[filesFather.hasClass('listfile')?'removeClass':'addClass']('listfile')
	// }
	
})


//新建功能
newBuild.on('click',function(){
	if(nameInput){
		nameInput=false;
		console.log(pid)
		fun.clickNewBuild(data,pid)
	}
})
rename.on('click',function(){

	if(nameInput){
		var li=filesFather.find('.active');
		fun.choseRename(li)
			//功能键隐藏/显示
	tool.funKeyShowOrHide()
	}
	
})
filesFather.on('click','a',function(){
	if($(this).data('del')){
	 	return
	}
	if(nameInput){
		var li=$(this).parent()
		// console.log($(this).parent().data('id'))
		fun.choseRename(li)
			//功能键隐藏/显示
	tool.funKeyShowOrHide()
	}

})

//画框
folderBox.on('mousedown',function(e){
	if(nameInput){
		// console.log(1111)
		// e.stopPropagation;
		fun.drawRect(e)
		//功能键隐藏/显示
		
		return false
	}	
})

//移动到
move.on('click',function(){
	if(nameInput){
			fun.moveFun();
	}

})
//如果没有files 点击新建
$('.smallNewBuild').on('click',function(){
		if(nameInput){
		nameInput=false;
		console.log(pid)
		fun.clickNewBuild(data,pid)
	}
})

//复制到
copy.on('click',function(){
	if(nameInput){
			fun.moveFun(true);
	}

})

//排序显示
sortBtn.on('mouseenter','div',function(){
	sortBtnUl.show();	
})

sortBtn.on('mouseleave','div',function(){
	sortWayTimer=setTimeout(function(){
		sortBtnUl.hide();
	},1000)
})
sortBtnUl.on('mouseenter', function (){
	clearInterval(sortWayTimer);
})
sortBtnUl.on('mouseleave', function (){
	sortBtnUl.hide();
})

//排序
sortBtnUl.on('click','li',function(){
	if(filesData&&nameInput){
		if($(this).hasClass('sortName')){
			filesData.sort(function(a,b){
				return b.name.localeCompare(a.name);
			})
		}
		if($(this).hasClass('sortSize')){
			filesData.sort(function(a,b){
				return b.size-(a.size);
			})
			console.log('按大小排序还没写')
		}
		if($(this).hasClass('sortData')){

			filesData.sort(function(a,b){
				return Date.parse(b.time) - Date.parse(a.time);;
			})
			
		}
		fun.init(data,pid)
	}

})

//没右键到文件上
folderBox.on('contextmenu',function(e){
	rightKey.show()
	e.preventDefault();
	rightKey.removeClass('rightFile rightdel').addClass('rightKey')

	fun.rightKeyPosi(e)
})
//右键到文件上
var prev=null;
folderBox.on('contextmenu','li',function(e){
	
	// e.preventDefault();
	rightKey.show()
	if (folderBox.type=='del'){
		rightKey.removeClass('rightKey rightFile').addClass('rightdel')

	}else{
		rightKey.removeClass('rightKey rightdel').addClass('rightFile')
	}
	

	if(tool.chosenum(filesData)<=1){
		if(prev){
			$(prev).removeClass('active');
			dealDataClass.getDataById(data,$(prev).data('id')).checked=false
		}
		$(this).addClass('active')
		dealDataClass.getDataById(data,$(this).data('id')).checked=true
		prev=this

		folderBox.find('.rightOpen').css({'color':''})
		folderBox.find('.rightRename').css({'color':''})

	}else{

		folderBox.find('.rightOpen').css({'color':'#eee'})
		folderBox.find('.rightRename').css({'color':'#eee'})

	}	

		allCheckContent.html(tool.youChosenum())
		
		fun.rightKeyPosi(e)

					//功能键隐藏/显示
		tool.funKeyShowOrHide()


	return false
})
folderBox.on('click','.rightOpen',function(){
	if(tool.chosenum(filesData)<=1){
		// console.log(filesFather.find('li.active'))
		fun.clickGoIn(filesFather.find('li.active'),true)
			//功能键隐藏/显示
		tool.funKeyShowOrHide()
	}else{
		return
	}
})
folderBox.on('click','.rightDown',function(){
	alert('还没写')
})
folderBox.on('click','.rightCopy',function(){
	// filesFather.find('li.active')
	if(nameInput){
		fun.moveFun(true);
	}
})
folderBox.on('click','.rightMove',function(){
	// filesFather.find('li.active')
	if(nameInput){
		fun.moveFun();
	}
})
folderBox.on('click','.rightRename',function(){
	// tool.chosenum(filesData)<=1?fun.choseRename(filesFather.find('li.active')):return;
	if(tool.chosenum(filesData)<=1){
		fun.choseRename(filesFather.find('li.active'))
	}else{
		return
	}
})
folderBox.on('click','.rightDel',function(){
	console.log(111)
	fun.deletekey(true)
	//功能键隐藏/显示
	tool.funKeyShowOrHide()
})

folderBox.on('click','.rightDelete',function(){
	fun.trueDelete();
})

folderBox.on('click','.rightBack',function(){
	fun.backTo();
})

folderBox.on('click','.rightFileName',function(){
	filesData.sort(function(a,b){
		return b.name.localeCompare(a.name);
	})
	console.log(folderBox.type)
	fun.init(data,pid,folderBox.type,filesData)
})
folderBox.on('click','.rightFileSize',function(){
	filesData.sort(function(a,b){
		return b.size-(a.size);
	})
	fun.init(data,pid,folderBox.type,filesData)
})
folderBox.on('click','.rightFileData',function(){
	filesData.sort(function(a,b){
		return Date.parse(b.time) - Date.parse(a.time);;
	})
	fun.init(data,pid,folderBox.type,filesData)
})

folderBox.on('click','.rightThumbnail',function(){
	filesFather.removeClass('folders').addClass('listfile')
})

folderBox.on('click','.rightList',function(){
	filesFather.addClass('folders').removeClass('listfile')
	
})


folderBox.on('click','.rightNewBuild',function(){
	if(nameInput){
		nameInput=false;
		fun.clickNewBuild(data,pid)
	}
})

folderBox.on('click','.rightAddPage',function(){
	filesData=fun.init(data,pid)
})


leftList.on('click','.getFile',function(){
	folderBox.type='del'

tool.leftInit(folderBox.type)

});

leftList.on('click','.asideList',function(){
	folderBox.type='all'
	tool.leftInit(folderBox.type)
	fun.init(data,0)
});

leftList.on('click','.type',function(){

	//folderBox.type='other'
	folderBox.type=$(this).data('type')
	//console.log( folderBox.type )
	tool.leftInit($(this).data('type'))

});

