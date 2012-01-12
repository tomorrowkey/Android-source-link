var versions = ['OHA-Android-4.0.3_r1.0', 'OHA-Android-4.0.1_r1.0', 'OHA-Android-2.3.7_r1.0', 'OHA-Android-2.3.4_r1.0', 'OHA-Android-2.3_r1.0', 'OHA-Android-2.2_r1.1'];
var current_url = document.location.href;
var className = current_url.replace(/^http:\/\/developer.android.com\/reference\/(.+).html/i, '$1');
//var className = current_url.replace(/http:\/\/developer.android.com\/intl\/ja\/reference\/(.+).html/, '$1');
var $block = $("<div/>");
for(var i in versions) {
	var $a = $('<a />');
	$a.attr('href', 'https://github.com/OESF/' + versions[i] + '/blob/master/frameworks/base/core/java/' + className + '.java');
	$a.text( innerText = versions[i]);
	$a.css('margin', '2px');
	$block.append($a);
}
$('#api-info-block').append($block);
