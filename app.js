"use strict";

// (5 KYU) Extract the domain name from a URL
/*
function domainName(url) {
	const httpPart = url.split("//");
	let currentUrl = "";
	let result = "";

	httpPart.length > 1
		? (currentUrl = String(httpPart.slice(1)).split("."))
		: (currentUrl = String(httpPart).split("."));

	if (currentUrl[0] !== "www") result = currentUrl[0];
	else result = currentUrl.slice(1, 2);

	return String(result);
}

domainName("www.xakep.ru");
*/

// (6 KYU) Break camelCase
/*
function solution(string) {
	return string
		.split("")
		.map((char) => {
			if (char === char.toUpperCase()) char = ` ` + char;
			return char;
		})
		.join("");
}

console.log(solution("camelCasingString"));
*/
