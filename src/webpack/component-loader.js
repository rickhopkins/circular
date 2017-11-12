/** set regex expressions to search for */
var templateUrlRegex = /templateUrl\s*:(\s*['"`](.*?)['"`]\s*([,}]))/gm;
var stylesRegex = /styleUrl\s*:(\s*['"`](.*?)['"`]\s*([,}]))/gm;
var stringRegex = /(['`"])((?:[^\\]\\\1|.)*?)\1/g;

/** set property name */
var templateProperty = 'template';
var styleProperty = 'styles';

/** replace the url with a require statement */
function replaceStringsWithRequires(string) {
	return string.replace(stringRegex, function (match, quote, url) {
		if (url.charAt(0) !== ".") {
			url = "./" + url;
		}
		return "require('" + url + "')";
	});
}

/** replace templateUrl and styleUrl with require statements */
module.exports = function(source) {
	/** replace the templateUrl and styleUrl fields */
	var newSource = source.replace(templateUrlRegex, function (match, url) {
		return templateProperty + ":" + replaceStringsWithRequires(url);
	}).replace(stylesRegex, function (match, urls) {
		return styleProperty + ":" + replaceStringsWithRequires(urls);
	});

	/** return the new source */
	return newSource;
};