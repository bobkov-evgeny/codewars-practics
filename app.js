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

// (6 KYU) Format a string of names like 'Bart, Lisa & Maggie'.
/*
function list(names) {
	const allNames = names.map((name) => name.name);
	return names.length > 2
		? `${allNames.slice(0, names.length - 1).join(", ")} & ${allNames.slice(
				names.length - 1
		  )}`
		: allNames.join(" & ");
}

console.log(list([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }]));
console.log(list([{ name: "Bart" }, { name: "Lisa" }]));
*/

// (5 KYU) Moving Zeros To The End

const moveZeros = function (arr) {
	const zeroArr = [];
	const numsArr = [];

	for (let i of arr) {
		if (i === 0 && i !== false) zeroArr.push(i);
		else numsArr.push(i);
	}

	return numsArr.concat(zeroArr);
};

//prettier-ignore
console.log(
	moveZeros(["a","b","c","d",1,false,"a","l","s","e",1,3,1,9,"[","o","b","j","e","c","t",0,"O","b","j","e","c","t","]",9,0,0,0,0,0,0,0,0,0,0,])
);
