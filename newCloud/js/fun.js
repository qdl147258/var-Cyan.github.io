// console.log(222)
class InteractiveFunction{
	constructor(){

	}
	//初始化页面
	init(data,pid,type,typedata){
		//还需继续添加内容
		if(filesData&&filesData.length){
			for(var i=0;i<filesData.length;i++){
				filesData[i].checked=false
			}
		}

		if(folderBox.type=='all'){
			newFilesData =viewDataClass.profiles(data, pid)
		}else{
			console.log(type)
			var html = setDataClass.createFiles( typedata );
			filesFather.html(html);
		}
		viewDataClass.probreads(data,pid)
		if(newFilesData&&newFilesData.length){
			for(var i=0;i<newFilesData.length;i++){
				newFilesData[i].checked=false
			}
		}
		allCheckContent.html('全选');
		// 返回上一层
		breadParent.children().length==1?backBox.hide():backBox.show();
		tool.testSmallNewBuild()

		return newFilesData
	}
	//点击进入
	clickGoIn(ele,onOff){
		 
		if(nameInput){
			var clickid=1*(ele.parent().data('id') || ele.data('id'))
			
		    allCheck.removeClass('active')	
		    
		    pid=clickid;
		      //可能有问题
		    filesData=this.init(data,pid);
		    tool.formShowOrHide()
		}
	}
	//单选功能
	selfcheck(ele){

		let eleParent=ele.parent();
		eleParent.toggleClass('active')
		dealDataClass.getDataById(data,Number(eleParent.data('id'))).checked=eleParent.hasClass('active')?true:false;
		allCheckContent.html(tool.youChosenum())

		var newFileData = filesData.filter(function(item){
			return folderBox.type=='del'?item.del:!item.del
		});

		newFileData.length==tool.chosenum(filesData)?allCheck.addClass('active'):allCheck.removeClass('active')
	}
	//返回上一层
	backFather(){
		if(nameInput){
			var sonId=$('.breadParent div:last').data('id')
			pid=dealDataClass.getDataById(data, sonId).pId
			filesData=fun.init(data,pid)
		}

	}

	//全选
	
	allcheckevent(_this){
	  	_this.toggleClass('active')
	  	let files=$('.folder ul:first li')
	  	if(files.length!==tool.chosenum(filesData)){
	  		_this.addClass('active')
	  		files.addClass('active')
	   	 	for(var i=0;i<files.length;i++){
		      	filesData[i].checked=true
		    }
	  	}else{
	  		_this.removeClass('active')
	  		files.removeClass('active')
	    	for(var i=0;i<files.length;i++){
	      	filesData[i].checked=false
	    	}
	  	}
	  	allCheckContent.html( tool.youChosenum())
	}
	alertFunOff(){
		alertWrap.transition({ opacity: 0, scale: 0 },500,'in')
		mask.transition({ opacity: 0, scale: 0 },500,'in' )
	}
	alertFun(options){
		//还可继续增加
		var dafluts={
			nowEle:alertWrap,
			parentEle:false,
			html:'',
			btn:false
		}

		$.extend(dafluts,options);

		if(dafluts.html){
			let objhtml=$('.alertContent');
			objhtml.html()
			objhtml.html(dafluts.html)
		}
		if(dafluts.parentEle){
			mask.transition({ opacity: 0.5, scale: 1 },500,'in');
		}
		//变化
		dafluts.nowEle.transition({ opacity: 0.8, scale: 10 },500,'in' ,function() {
			dafluts.nowEle.transition({ opacity: 1, scale: 1 },100,'in' ,function() {

				if(!dafluts.btn){
					setTimeout(function(){
						dafluts.nowEle.transition({ opacity: 0, scale: 0 },500,'in' )
						if(dafluts.parentEle){
							mask.transition({ opacity: 0, scale: 0 },500,'in' )
						}
						nameInput=true;
					},1200)
				}else{
					alertBtnBox.show()
				}


			});
		});
		
	}

	moveFun(copyfun){
		var clickid='',clickself='',clickfather='';
		var _this=this
		nameInput=false
		viewDataClass.proTree(data)
		tool.maskSOH(true)
		tool.dialogTreeSOH(true)
		dialogFileTree.on('click','li span',function(){
			//点击span父级li的id
			clickid=$(this).parent().data('id')
			//点击的亮
			viewDataClass.proTree(data, clickid)

			clickself=dealDataClass.getDataById(data, clickid)
			//获取到点击元素的自己及所有父级
			clickfather=dealDataClass.getParentsById(data, clickid)
			//获取的数据
		})
		dialogFooter.on('click','.sure',function(){
			if(tool.testMandTname(filesData,clickself.child)){
				_this.alertFun({
					html:'不能移动到当前',
					btn:false
				})
			}else if(tool.testMandTname(filesData,clickself.child)){
				if((typeof clickid)==='string'){
				tool.dialogTreeSOH()
				tool.maskSOH()
				}else{
					tool.dialogTreeSOH()
					_this.alertFun({
						html:'有一样的是否覆盖',
						btn:true
					})
					var that=_this
					alertBtnBox.on('click','.yes',function(){
						if(copyfun){
							tool.copyfugai(filesData,clickself.child)
							tool.copyAddTarget(filesData,clickself)
						}else{
							tool.movefugai(filesData,clickself.child)
							tool.delAddTarget(filesData,clickself)
						}
						that.alertFunOff()
						//生成页面
				   		filesData=that.init(data,pid);
				   		allCheckContent.html('全选');
				   		if(filesData&&filesData.length){
							for(var i=0;i<filesData.length;i++){
								filesData[i].checked=false
							}
						}

					})
					alertBtnBox.on('click','.no',function(){
						that.alertFunOff()
					})
					tool.formShowOrHide()
				}
			}else{
				if(copyfun){
					tool.copyAddTarget(filesData,clickself)
				}else{
					tool.delAddTarget(filesData,clickself)
				}
				
				filesData=_this.init(data,pid);
				tool.maskSOH()
				tool.dialogTreeSOH()
			}
			
		})

		dialogFooter.on('click','.cancel',function(){
			tool.dialogTreeSOH()
			tool.maskSOH()
		})
			
		tool.formShowOrHide()
	}

	// 彻底删除
	trueDelete(){
		for(var i=0;i<filesData.length;i++){
		    if(filesData[i].checked){
		    	var parentData = dealDataClass.getDataById(data,filesData[i].pId).child
		    	var childData = dealDataClass.getDataById(data,filesData[i].id)

		    	parentData.forEach(function(item,index){
		    		if( item === childData ){
		    			parentData.splice(index,1)
		    		}
		    	})
		    }
		}
		//重新渲染
		tool.leftInit(folderBox.type)		
	}

	//还原
	backTo(){
		for(var i=0;i<filesData.length;i++){
		    if(filesData[i].checked){
		    	var childData = dealDataClass.getDataById(data,filesData[i].id)
		    	childData.del = false
		    }
		}
		//重新渲染
		tool.leftInit(folderBox.type)		
	}	

	//删除功能
	deletekey(moveOrcopy){
			//选中数据的id 
		let arrDelId=[];
		for(var i=0;i<filesData.length;i++){
		    if(filesData[i].checked){
		    	arrDelId.push(filesData[i].id)
		    }
		}
		//选中的数据
		let arrDelData=[]
		for(var i=0;i<arrDelId.length;i++){
	      	arrDelData.push(dealDataClass.getDataById(data, arrDelId[i]))
	    }

		let fatherData=dealDataClass.getDataById(data, arrDelData[0].pId);	
	        for(var i=0;i<fatherData.child.length;i++){
		     	for(var j=0;j<arrDelData.length;j++){
		        	if(fatherData.child[i].id==arrDelData[j].id){
		        		fatherData.child[i].del=true
			          	if(allCheck.hasClass('active')){
			        		allCheck.removeClass('active');
			      		}
		        	}
		     	}
		    }
			
      		filesData=fun.init(data,pid)
     		// return recoveryData
	}
	// 新建功能函数
	clickNewBuild(data,pid){
	    allCheck.removeClass('active');
	    allCheckContent.html('全选');
	    if(filesData&&filesData.length){
	    	for(var i=0;i<filesData.length;i++){
		      filesData[i].checked=false
		    }
	    }

	    filesFather.children().removeClass('active');
	   	// 文件结构
	    var li=$(`<li><i class="checkbox"></i>
		          <span class="folderimg"></span>
		          <a class="foldername" href="javascript:;"></a>
		          <div class="more">
		            <span>-</span>
		            <time>2017-03-06</time>
		          </div>
		          <form class="change-foldername active">
		            <input type="text" class="newInput change" >
		          </form>
	          </li>`)
	         
	    filesFather.prepend(li, filesFather.first()) 
	    let input=$('.newInput') ;
	    input.focus();

	    let _this=this
        input.on('blur',function(){
         	var inputVal=input.val().trim();
		    var inputLen=inputVal.length;
		    var n=1
		      	if(inputVal===''){
			      	_this.alertFun({
			      		parentEle:true,
						html:'新建文件时记得起名字呦'
			      	})
			      	
		          $('.folder ul:first li:first').remove();
		          tool.formShowOrHide()
		          return
		        }
		    tool.nameAddNum(filesData,inputVal,inputLen,n)

        })
	}

// 重命名
	choseRename(father){
		// dealDataClass
		for(var i=0;i<filesData.length;i++){
			filesData[i].checked=false;
		}
		filesFather.find('li').removeClass('active')
		//恢复全选内容为全选
		allCheckContent.html('全选');
		allCheck.removeClass('active')

		//获取数据及标签
		nameInput=false;
	    let thisid=father.data('id')
	    let thispid=dealDataClass.getDataById(data, thisid).pId
	    let thisform=father.find('form');
	    let thisa=father.find('a');
	    let thisinput=thisform.find('input');
	    //自己原来的名字
	    let selfname=thisa.html();
	    // 获得除了自己的同级数据
	    let otherdata=dealDataClass.getOtherById(data,thispid,thisid)
		    //-------------------------
		    //让input显示
	        thisform.addClass('active')
	    	//选中
	   		thisinput.select();
	   		var _this=this
	   		//当失去焦点的时候
	   		thisinput.on('blur',function(){
	   		// 获取新输入的名字
	        var thisinputNewName=thisinput.val().trim()
	      	//-------------没起名----------------
	      	if(thisinputNewName==''){
		        thisform.removeClass('active')
		        father.removeClass('active')
	      	}else if(tool.compare(thisinputNewName,otherdata)){
	      		_this.alertFun({
						parentEle:true,
						html:'与当前文件内的文件名重复了呦'
					})
		        thisinput.select();
	      	}else if(!tool.compare(thisinputNewName,otherdata)){
	      		console.log(thisa)
	      		thisa.html(thisinputNewName)
	         	dealDataClass.getDataById(data, thisid).name=thisa.html(thisinputNewName).html();
	          	thisform.removeClass('active')
	          	father.removeClass('active')
	          	dealDataClass.getDataById(data, thisid).checked=false;
	      	}
	      	allCheckContent.html('全选');
	      	tool.formShowOrHide()
	      	console.log()
	    })
	}

	drawRect(e){
		if(e.buttons!=1)return//取消右键画框
		var target=e.target;
		if(!$(target).hasClass('folder'))return
			var div=$(`<div style="position:absolute;background:rgba(0,0,0,.5)"></div>`)
		e.preventDefault();
		e.stopPropagation();
			folderBox.prepend(div, folderBox.first()) 
			var downx=e.pageX,downy=e.pageY;
			var _this=this;
			$(document).on('mousemove',function(e){
				_this.moveFn(e,div,downx,downy)	
			})
			$(document).on('mouseup',_this.upFn)
	}

	moveFn(e,div,downx,downy){

		var fol=folderBox.offset().left;
		var fot=folderBox.offset().top;
		var movex=fol+folderBox.width()<e.pageX?fol+folderBox.width():e.pageX;
		var movey=fot+folderBox.height()<e.pageY?fot+folderBox.height():e.pageY;

		var W=Math.abs(movex-downx);
		var H=Math.abs(movey-downy);
		var L=Math.min(movex-fol,downx-fol);
		var T=Math.min(movey-fot,downy-fot);

			tool.pengzhuang(div,folderBox.find('li'))
			div.css({
				'width':W,
				'height':H,
				'left':L,
				'top':T
			})
			allCheckContent.html(tool.youChosenum())
	}
	upFn(){
		var _this=this;
		$(document).off('mouseup',_this.upFn)
		$(document).off('mousemove',_this.moveFn)
		folderBox.find('div:first').remove();
		tool.funKeyShowOrHide()
	}



// 右键位置
rightKeyPosi(e){
	
		var x = e.pageX-folderBox.offset().left, y = e.pageY-folderBox.offset().top;
//       // 当鼠标的x坐标距离屏幕可视区右侧的距离大于菜单的宽度的时候
//       // 那么这个菜单就出现在鼠标的右侧，否则就出现在鼠标的左侧。
		rightKey.css({
			'left':folderBox.width() - x < rightKey.width()?x - rightKey.width():x,
			'top':folderBox.height() - y < rightKey.height()?y - rightKey.height():y
		})

    	$(document).on('click',function (){
      		rightKey.hide()
      	});
	}


}