function xdomain(par){//crossdomain function
	 par.xpath=par.xpath==undefined?"*":par.xpath;
	 par.type=par.type==undefined?"xml":par.type;
	 xmlhttp=new XMLHttpRequest();
	 par.url = 'http://query.yahooapis.com/v1/public/yql?q='+encodeURIComponent('select * from html WHERE url="'+par.url+'" AND xpath="'+par.xpath+'"')+'&format='+par.type+'&callback=cb';
	 xmlhttp.open("GET",par.url,false);
	 xmlhttp.onload=function(){
	 	function cb(d){return d;}//callBack bunction for returning results from query
		par.callBack(eval(xmlhttp.responseText));
	 };
	 xmlhttp.send();
};
xdomain({
	url:"http://cropdanka.com/",// url of site
	type:"xml",//return in xml or JSON format
	xpath:"*",//filter objects
	callBack:function(data){
		console.log(data);// display object returned from request
		var domElement=document.createElement("div");//create DOM
		domElement.innerHTML=data.results[0];// load result
		var options=domElement.querySelectorAll("option");//now we can make javascript selector
		for(var i in options)console.log(options[i].innerHTML);// and display results
	}
});