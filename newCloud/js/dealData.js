// console.log(data )
class DealData{
	constructor(data){
		this.data=data
	}
	//通过指定的id获取到对应的数据
	getDataById(data,id){
		let item = null;
		let _this=this;
	  	for(var i=0; i<data.length; i++){
		    if(data[i].id === id){
		      	item = data[i];
		      	break;
		    }
		    if(!item && data[i].child){
		      	item = _this.getDataById(data[i].child, id);
			    if(item){
			    	break;
			    }
			}
		}
	  return item;
	}
	// 获取到一组数据data中指定id的所有的子集
	getChildrenById(data, id){
		let _this=this;
	  	let targetData = _this.getDataById(data,id);
	  	if(targetData && targetData.child){
	   		return targetData.child;
	  	}
	}
	// 通过指定的id获取到自己以及自己所有的父级
	getParentsById(data, id){
		let items = [];
		let _this=this;
		let current = _this.getDataById(data, id);
		if(current){
			items.push(current);
			items = items.concat(_this.getParentsById(data, current.pId));
		}
		return items;
	}
	//通过指定的id和pid获取其他同级的数据
	getOtherById(data,pid,id){
		let _this=this;
	  	let arr=_this.getChildrenById (data, pid);
	 	let a=_this.getDataById(data, id);
	  	let item=[];
	  	for(var i=0;i<arr.length;i++){
		    if(a.id!=arr[i].id){
		      item.push(arr[i])
		    }
	  	}
	  	return item
	}
	//循环所有数组,显示所有被del属性为true的数据
	getDel(data){
		
		let item=[]
		let _this=this;
	  	for(var i=0;i<data.length;i++){
		    if(data[i].del){
		      item.push(data[i])
		    }else{
		    	if(data[i].child){
		      	item = item.concat(_this.getDel(data[i].child))
		    	}

		    }
	  	}
	  	return item
	};

	getDataByType(data,type){
		let item=[];
		let _this=this;
	  	for(var i=0;i<data.length;i++){
	  		if(!data[i].del){
			    if(data[i].type === type){
			      item.push(data[i])
			      if(data[i].child){
			      	item = item.concat( _this.getDataByType(data[i].child,type) )
			      }
			    }else{
			    	if(data[i].child){
				      	item = item.concat( _this.getDataByType(data[i].child,type) )
				    }
			    }
		    }
	  	}
	  	return [...new Set(item)]
	}

}
