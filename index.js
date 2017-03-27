var request = require('request');
var Iconv = require('iconv').Iconv;  
var iconv = new Iconv('euc-kr', 'utf-8//translit//ignore');

var url = 'http://naver.com';
var options = {
	url: url,
	encoding: null
}

request(options, function(error, response, body){
	if(error){
		throw error;
	}else{
		var data = iconv.convert(body).toString();
		console.log(data);
	}
});
