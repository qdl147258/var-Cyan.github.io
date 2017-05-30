class JudgmentAndTools{
	constructor(){	

	}

	//判断段选中几个
	chosenum(filesData){
		var chosenum=0;
		if(filesData&&filesData.length){
			for(var i=0;i<filesData.length;i++){
			    if(filesData[i].checked==true){
			      chosenum++;
			      // console.log(chosenum)
			    }
			}
		}

	  	return chosenum
	}
	//验证有没有选中的 用于移动到 和全选的内容
	
	testCheckedTrue(filesData){
	  	if(filesData){
	    	for(var i=0;i<filesData.length;i++){
	      		if(filesData[i].checked==true){
	       	 	return true
	      		}
	    	}
	   	 	return false
	  	}
	}
	//判断当前数据是否真实存在
	testfilesData(filesData){
		var n=0;
		if(filesData&&filesData.length){
			for(var i=0;i<filesData.length;i++){
				if(filesData[i].del){
	       	 		n++;
	      		}
			}
			if(folderBox.type=='del'){
				return n==filesData.length?true:false
			}else{
				return n==filesData.length?false:true
			}
			
		}
	}
	
	// 判断已选中几个文件,如果为0则显示全选
	youChosenum(){
		// console.log(this.chosenum(filesData))
	  let choseinnerHTML;
	  return choseinnerHTML=this.testCheckedTrue(filesData)?`已选中${this.chosenum(filesData)}个文件/文件夹`:'全选';
	}

	funKeyShowOrHide(){
		// console.log(111)
		var _this=this
		var arr=[newBuild,copy,move,rename,del]
		arr.forEach(function(item){
			_this.funKeyChange(item,_this.chosenum(filesData))
		})
	}
	funKeyChange(obj,num){
		if(folderBox.type=='all'){
			this.funKeySport(obj,num)
		}else if(folderBox.type=='del'){
			obj.hide()
		}else{
			this.funKeySport(obj,num)
		}
	}

	funKeySport(obj,num){
		if(obj==newBuild){
			folderBox.type=='all'?obj.show():obj.hide()
		}else if(obj==rename){
			if(num==1){
				this.funKeyShow(obj)
			}else{
				this.funKeyHide(obj)
			}
		}else{
			if(num){
				this.funKeyShow(obj)
			}else{
				this.funKeyHide(obj)
			}
		}
	}
	funKeyShow(obj){
		obj.show()
		obj.transition({ opacity:1, scale: 1},500,'in' )
	}
	funKeyHide(obj){
		obj.transition({ opacity:0, scale:0},500,'in').hide()
	}
	// 相当于判断
	formShowOrHide(){
	  var froms=$('.folder form')
	    if(froms.hasClass('active')){
	      nameInput=false;
	    }else{
	    	nameInput=true;
	    }
	    
	}
	//文件建立时间 用于新建等
	newBuildDate(){
	    var newDate=new Date();
	    var oYear=newDate.getFullYear(),
	        oMonth=newDate.getMonth(),
	        oDate=newDate.getDate(),
	        oHours=newDate.getHours(),
	        oMins=newDate.getMinutes(),
	        oSecs=newDate.getSeconds();
	    return `${oYear}/${this.add0(oMonth+1)}/${this.add0(oDate)}  ${this.add0(oHours)}:${this.add0(oMins)}:${this.add0(oSecs)}`
	  }

	//验证名字是否重复 用于新建等
	testname(filesData,inputVal){
	  	if(filesData){
	    	for(var i=0;i<filesData.length;i++){
	      		if(filesData[i].name===inputVal){
	        		return false
	      		}
	    	}
	    	return true
	  	}
	}
	//补0函数 用于新建等
	add0(n){
      return n<10 ? "0"+n:n
    }

    //给重复的名字尾部加数字 用于新建
	nameAddNum(filesData,inputVal,inputLen,n){
	   	if(this.testname(filesData,inputVal)){
	        var newfile={
	            id: ++user_data.maxId,
	            pId: pid,
	            name: inputVal,
	            checked: false,
	            type: 'folder',
	            time: this.newBuildDate(), 
	            child: [],
	            size:'-'
	        }
	          dealDataClass.getDataById(data,pid).child.unshift(newfile)
	          viewDataClass.profiles(data,pid)
	          viewDataClass.proTree(data,pid)
	          // viewDataClass.promovebox(data,pid)  
	          this.formShowOrHide();
	          filesData=fun.init(data,pid)
	      }else{
	        if(inputVal.length>inputLen){
	          inputVal=inputVal.substring(0,inputLen)
	        }
	        this.nameAddNum(filesData,inputVal+`(${++n})`,inputLen,n)

	    }
	}
	//验证与其他的名字是否一样 用于重命名
	compare(thisinputValue,otherdata){
	  	for(var i=0;i<otherdata.length;i++){
		    if(thisinputValue==otherdata[i].name){
		      return true
		    }
	  	}
	  	return false
	}
	//看名字！！！
	duang(c,t){
		// current/div  t /文件
		
		var current={
				'width':c.width(),
				'height':c.height(),
				'left':c.offset().left,
				'right':c.offset().left+c.width(),
				'top':c.offset().top,
				'bottom':c.offset().top+c.height()
			}
			// console.log(t)
		var target={
				'width':t.width(),
				'height':t.height(),
				'left':t.offset().left,
				'right':t.offset().left+t.width(),
				'top':t.offset().top,
				'bottom':t.offset().top+t.height()
			}
		return current.right>target.left && current.left<target.right && current.top<target.bottom && current.bottom>target.top
	    
	}

    //碰撞给li添加active 用于画框
    pengzhuang(ele,lis){
      for(var i=0; i<lis.length; i++){
        if(this.duang(ele, lis.eq(i))){
          filesData[i].checked = true
          lis.eq(i).addClass('active');
          allCheck[this.chosenum(filesData)==filesData.length?'addClass':'removeClass']('active')
        }else{
          if(lis.eq(i).hasClass('active')){
            filesData[i].checked = false;
            lis.eq(i).removeClass('active');
            allCheck[this.chosenum(filesData)==filesData.length?'addClass':'removeClass']('active')
          }
        }
      }
    }

    //重复之后覆盖   用于复制
    copyfugai(filesData,clickchild){
	  for(var i=0;i<filesData.length;i++){
	    if(filesData[i].checked){
	      for(var j=0;j<clickchild.length;j++){
	      	console.log(filesData[i].name,clickchild[j].name)
	        if(filesData[i].name==clickchild[j].name){
	          filesData[i].checked=false;
	          filesData[i].pId=clickchild[j].pId;
	          // clickchild.splice(j,1);
	          break;
	        }
	      }
	    }
	  }
	}
	//将选中的数据复制到目标的child
	copyAddTarget(filesData,clickself){
		if(filesData){
			for(var i=0;i<filesData.length;i++){
			    if(filesData[i].checked){
			      filesData[i].pId=clickself.id;
			      // filesData[i].id = ++user_data.maxId;
			      filesData[i].checked=false;
			      clickself.child.unshift(filesData[i])
			    }
			}
		}


	}
	//重复之后覆盖  用于移动
	movefugai(filesData,clickchild){
	  	for(var i=0;i<filesData.length;i++){
	    	if(filesData[i].checked){
	      		for(var j=0;j<clickchild.length;j++){
	        		if(filesData[i].name==clickchild[j].name){
			          	filesData[i].pId=clickchild[j].pId;
			          	filesData[i].checked=false;
			          	clickchild[j]=filesData.splice(i,1)[0];
			          	i--;
			          	break;
	        		}
	      		}
	    	}
	  	}
	}
	//将删除的数据移动到目标的child
	delAddTarget(filesData,clickself){
	  	for(var i=0;i<filesData.length;i++){
	   		if(filesData[i].checked){
		      	filesData[i].pId=clickself.id;
		      	filesData[i].checked=false;
		      	clickself.child.unshift(filesData.splice(i,1)[0])
		      	i--;
	    	}
	  	}
	}

	// 验证要移动的名字和目标点的名字是否相同  用于移动到
	testMandTname(filesData,clickself){
		if(filesData){
			for(var i=0;i<filesData.length;i++){
			    if(filesData[i].checked){
			      for(var j=0;j<clickself.length;j++){
			        if(filesData[i].name==clickself[j].name ||filesData[i].id==clickself[j].id){
			            return true
			        }
			      }
			    }
			  }
			  return false
		}
	}

	//验证名字 和id 是否一样 移动复制情况下 是否能将进行
	testIdName(clickid){
		let fatherSon=dealDataClass.getChildrenById(data, id)
		for(var i=0;i<fatherSon.length;i++){
			for(var j=0;j<filesData.length;j++){
				if(filesData[j].checked){
					if(fatherSon[i].name===filesData[j].name||fatherSon[i].id===filesData[j].id){
						return true
					}
				}
			}
		}

	}
    maskSOH(onOff){
    	mask.transition(onOff?{ opacity: 0.8, scale: 1 }:{ opacity: 0, scale: 0 },500,'in') 
    }
    dialogTreeSOH(onOff){
    	dialogFileTree.transition(onOff?{ opacity: 1, scale: 1 }:{ opacity: 0, scale: 0 },500,'in') 
    }

    // 判断点击的类型
    clickType(type,thisDataType){
      //console.log(data[0].child,$(this).data('type'))
      switch(type){
        case 'all':
          return dealDataClass.getChildrenById(data,pid);;
        break;
        case 'del':
          return dealDataClass.getDel( data[0].child );
        break;
        default:  return dealDataClass.getDataByType( data[0].child,thisDataType );
      }
    }

    leftInit(thisDataType){
    			//把上一个页面的选中状态变成false
		if(filesData&&filesData.length){
			for(var i=0;i<filesData.length;i++){
				filesData[i].checked=false
			}
		}

		let prodata =tool.clickType(folderBox.type,thisDataType)
			if(prodata&&prodata.length){
			for(var i=0;i<prodata.length;i++){
				prodata[i].checked=false
			}

		}

		//console.log(prodata)
		// viewDataClass.proTree(data)
		//恢复全选内容为全选
		allCheckContent.html('全选');
		allCheck.removeClass('active')

		this.testSmallNewBuild()
		// tool.testfilesData(prodata)?smallNewBuild.hide():smallNewBuild.show();

		//功能键隐藏/显示
		tool.funKeyShowOrHide()

		filesData=prodata
		var html = setDataClass.createFiles( filesData,(thisDataType==='del'?true:false) );
		filesFather.html(html);

    }


	//数据的长度是否为0 如果为0 则显示小新建，否则隐藏
    testSmallNewBuild(){
    	if(folderBox.type=='all'){
    		tool.testfilesData(newFilesData)?smallNewBuild.hide():smallNewBuild.show();
    	}else{
    		smallNewBuild.hide()
    	}		
 		
    }


}