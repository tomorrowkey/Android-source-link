var baseUrl = [/^http:\/\/developer.android.com\/reference\/(.+).html/i, /http:\/\/developer.android.com\/intl\/ja\/reference\/(.+).html/];
var versions = ['OHA-Android-4.0.3_r1.0', 'OHA-Android-4.0.1_r1.0', 'OHA-Android-2.3.7_r1.0', 'OHA-Android-2.3.4_r1.0', 'OHA-Android-2.3_r1.0', 'OHA-Android-2.2_r1.1'];
var current_url = document.location.href;

//A class name is extracted from URL which matches 'baseUrl'. 
var extractClassName=function(url){
	for(var i in baseUrl){
		if(url.match(baseUrl[i])){
			return url.replace(baseUrl[i], '$1');
		}
	}
	alert('undefined url:' + url);
	return null;
}

var className = extractClassName(current_url);
var $block = $("<div/>");
for(var i in versions) {
	var $a = $('<a />');
	$a.attr('href', 'https://github.com/OESF/' + versions[i] + '/blob/master/frameworks/base/core/java/' + className + '.java');
	$a.attr('target', '_blank');
	$a.text( innerText = versions[i]);
	$a.css('margin', '2px');
	$block.append($a);
}
$('#api-info-block').append($block);
