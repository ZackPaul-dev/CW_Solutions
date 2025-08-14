//CodeWars Solutions
class PaginationHelper {
	constructor(collection, itemsPerPage) {
	// The constructor takes in an array of items and a integer indicating how many
	// items fit within a single page
    this.collection = collection;
    this.num = itemsPerPage;
	}
	itemCount() {
	// returns the number of items within the entire collection
    return this.collection.length
	}
	pageCount() {
	// returns the number of pages
    return Math.ceil(this.collection.length / this.num);
	}
	pageItemCount(pageIndex) {
	// returns the number of items on the current page. page_index is zero based.
	// this method should return -1 for pageIndex values that are out of range
  if(Number.isInteger(pageIndex) == false || pageIndex+1 > this.pageCount() || pageIndex < 0){
    return -1
  }
    else if(pageIndex + 1 < this.pageCount()){
      return this.num;
    }
    else return this.collection.length % this.num
	}
	pageIndex(itemIndex) {
	// determines what page an item is on. Zero based indexes
	// this method should return -1 for itemIndex values that are out of range
  if(this.collection.length === 0 || Number.isInteger(itemIndex) == false || itemIndex+1 > this.collection.length || itemIndex < 0){
    return -1
  }
  else return Math.floor(itemIndex / this.num)
	}
}
var isAnagram = function(test, original) {
	return test.toLowerCase().split('').sort().join('') === original.toLowerCase().split('').sort().join('')
   }

   function nameShuffler(str){
	return str.split(' ').reverse().join(' ');
	
  }

  function stringToArray(string){

	return string.split(' ')
  
  }
  function updateLight(current) {
  
	return current == 'green' ? 'yellow' :
	current == 'yellow' ? 'red' :
	'green'
  
  }

  function solution(number){
	let arr = [];
	if(number <= 0){
	  return 0
	}
	else for(let i = 0; i < number; i++){
	  if(i % 3 == 0 || i % 5 == 0){
		arr.push(i)
	  }
	}
	return arr.reduce((acc, curr) => acc + curr);
  }
  
  function createPhoneNumber(numbers){
	if(numbers.length != 10){
	  return "Invalid Input"
	}
	let part1 = numbers.slice(0,3).join('')
	let part2 = numbers.slice(3,6).join('')
	let part3 = numbers.slice(6).join('')
	
	const phone = `(${part1}) ${part2}-${part3}`
	return phone;
  }

  function duplicateCount(text){
	let arr = text.toLowerCase().split('')
	let cache = {}
	let count = 0
  
	arr.forEach((el) => {
	  if(cache[el] >0){
		cache[el]++
	  }
	  else cache[el] = 1
	})
	console.log(cache)
	for(let i in cache){
	  cache[i] > 1 ? count++ : false
	}
	return count
  }

  function XO(str) {
	let xNum = 0;
	 let oNum = 0;
	
	 str.toLowerCase().split('').forEach((el) => {
	   if(el == 'x'){
		 xNum++
	   }
	   else if(el == 'o'){
		 oNum++
	   }
	 })
	 return xNum === oNum
   }

   function past(h, m, s){
	return (h * 3600000) + (m * 60000) + (s *1000)
  }
  function spinWords(string){
	let arr = string.split(' ')
   
	return arr.map((x) => x.length > 4 ? x.split('').reverse().join('')
		   : x).join(' ')
  }

  function digitalRoot(n) {
	let arr = n.toString().split('')
	if(arr.length > 1){
	  n = arr.reduce((a,b) => Number(a)+Number(b))
	  console.log(n)
	  return digitalRoot(n)
	}
	return n
  }

  function getAverage(marks){
	return Math.floor(marks.reduce((a, b) => a + b) / marks.length)
  }

  function findUniq(arr) {
	let sort = arr.sort((a, b) => a -b);
	 if(sort[0] != sort[1]){
	   return sort[0]
	 }
	 else return sort[sort.length - 1]
   }

   function humanReadable (seconds) {
	if(seconds < 0 || seconds > 359999){
	  return null
	}
	else if(seconds == 0){
	  return '00:00:00'
	}
	let hours = Math.floor(seconds / 3600)
	seconds = seconds - (hours * 3600)
	if(hours < 10){
	  hours = '0' + hours
	}
	 let minutes = Math.floor(seconds / 60)
	seconds = seconds - (minutes * 60)
	if(minutes < 10){
	  minutes = '0' + minutes
	}
	if(seconds < 10){
	  seconds = '0' + seconds
	}
	return `${hours}:${minutes}:${seconds}`;
  }
  function invert(array) {
	return array.map((x) => x * -1);
 }

 function removeUrlAnchor(url){
	let arr = url.split('')
   
	arr.map((x, i) => x === '#' ? arr.splice(i, arr.length - i) : x)
			   
				return arr.join('')
  }

  function betterThanAverage(classPoints, yourPoints) {
	if(classPoints.reduce((a,b) => a+b) / classPoints.length < yourPoints){
	  return true;
	}
	else return false;
  }

  var number = function(busStops){
	let totalOn = 0;
	let totalOff = 0;
   
	busStops.map((arr) => {
	  totalOn += arr[0]
	  totalOff += arr[1]
	})
   
	return totalOn - totalOff;
  }

  function findSmallestInt(arr) {
	arr.sort((a, b) => a-b)
	return arr[0];
  }

  const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
	return fuelLeft * mpg >= distanceToPump
  };

  function combat(health, damage) {
	if(health - damage < 0){
	  return 0
	}
	else return health - damage
  }

  function findMultiples(integer, limit) {
	let arr = []
	for(let i = 1; i * integer <= limit; i++){
	  arr.push(i * integer)
	}
	return arr;
  }

  function unusualFive() {
	return "five!".length
  }
  function booleanToString(b){
	return String(b)
  }

  function correct(string)
{
  return string.replaceAll('5', 'S').replaceAll('0', 'O').replaceAll('1', 'I')
	}

	const sequenceSum = (begin, end, step) => {
		let arr = []
		if(begin > end){
		  return 0
		}
		for(let i = begin; i<= end; i += step){
		  arr.push(i)
		}
		return arr.reduce((a, b) => a + b)
	  };
	
	  function plural(n) {
		if(n < 1 || n > 1){
		  return true
		}
		else return false
	  }

	  function hero(bullets, dragons){
		return bullets / 2 >= dragons;
	   }

	   function feast(beast, dish) {
		let arr1 = beast.split('')
		let arr2 = dish.split('')
		
		return arr1[0] == arr2[0] && arr1[arr1.length-1] == arr2[arr2.length-1]
		}
		
		function pipeFix(numbers){
			let arr =[]
			for(let i = numbers[0]; i<= numbers[numbers.length-1]; i++){
			  arr.push(i)
			}
			 return arr;
		   }

		   function helloWorld(){
			let str = "Hello World!"
			  console.log(str)
			}
			
			function saleHotdogs(n){
				return n < 5 ? n * 100 :
				n >= 5 && n < 10 ? n * 95 :
				n * 90
			  }

			  function removeExclamationMarks(s) {
				return s.replaceAll('!', '');
			  }
			  
			  function gotta(){
				return "greensquare!"
			  }
			
			  function getNiceNames(people){
				//TODO
				const niceList = people.filter((el) => el.wasNice == true)
				if (niceList.length == 0){
				  return []
				}
				else return niceList.map((el) => el.name);
			  }
			  
			  function getNaughtyNames(people){
				//TODO
				const naughtyList = people.filter((el) => el.wasNice == false)
				if(naughtyList.length == 0){
				  return []
				}
				else return naughtyList.map((el) => el.name)
			  }
			
			  var isSquare = function(n){
				if(Number.isInteger(Math.sqrt(n)) == true){
				  return true;
				}
				else return false; // fix me
			  }
			
			  function removeEveryOther(arr){
				//your code here
				return arr.filter((el, i) => i % 2 ==0)
			  }
			
			  function litres(time) {
				return Math.floor(time/2);
			  }
			
			  function countPositivesSumNegatives(input) {
				// your code here
				let pos = 0;
				let sumNeg = 0;
				if(Array.isArray(input) == false || input.length == 0 ){
				  return []
				}
				else for(let el in input) {
				  if(input[el] > 0){
				  pos++
				}
				else sumNeg = sumNeg + input[el]
				}
				let result =[pos, sumNeg]
				return result;
			  }
			
			  function countSmileys(arr){
				let faceRegex= /[:;][-~]?[)D]/
				let count = 0;
				for(face of arr){
				  if(faceRegex.test(face)){
					 count++;
					 }
				}
				return count;
			  }
			
			  function getAge(inputString){
				// return the girl's correct age as an integer. Happy coding :) 
				  return Number(inputString.substring(0,1))
				}
			
				function sumTwoSmallestNumbers(numbers) { 
					let newArr = numbers.sort((a,b)=>a-b)
					return newArr[0] + newArr[1]
				  }
			
				  function squareSum(numbers){
					let newArr = numbers.map((el) => el * el);
					if(numbers.length == 0){
					  return 0
					}
					else
					return newArr.reduce((acc, curr) => acc + curr);
				  }
			
				  function openOrSenior(data){
					let result = []
					for(const el of data){
					if(el[0] > 54 && el[1] > 7){
					result.push("Senior")
					}
					else result.push("Open")
					}
					return result
				  }
			
				  function makeUpperCase(str) {
					return str.toUpperCase();
				  }
			
				  function findShort(s){
					let arr = s.split(' ');
					arr = arr.map((x) => x.length)
					arr.sort((a, b) => a-b)
					return arr[0]
				  }
			
				  function arithmetic(a, b, operator){
					return operator === "add" ? a + b
					: operator === "subtract" ? a - b
					: operator === "multiply" ? a * b
					: operator === "divide" ? a / b
					: "not math!";
				  }
			
				  ​
			You
			​
			function validatePIN (pin) {
			  let invalid = /[^0-9]/
			  if(invalid.test(pin) == true){
				return false
			  }
			  else if(pin.length == 4 || pin.length == 6){
				return true
			  }
			  else return false
			}
			function lovefunc(flower1, flower2){
			 
				return (flower1 + flower2) % 2 == 1 ? true : false  
				}
			
				function opposite(number) {
					return number * -1
				  }
				  const areaOrPerimeter = function(l , w) {
					if(l == w){
					  return l * w
					}
					else return (l*2) + (w * 2)
				  };
			
				  function solution(string) {
					const regex = /[A-Z]/g
					const arr = string.split('');
					 const newStr = arr.map((x) => regex.test(x) == true ?  ' ' + x : x)
					 
					 return newStr.join('')
				  }
			
				  function checkForFactor (base, factor) {
					return base % factor == 0 ? true : false;
				  }
						
				  var summation = function (num) {
					let sum = 0
					for(let i = 1; i <= num; i++){
					  sum += i;
					}
					return sum
				  }
				  
				  function square(num){
					return num * num
				  }
						function deleteNth(arr,n){
			  let cache = {};
			  return arr.filter(function(x){
				cache[x] = (cache[x] || 0) +1
				return cache[x] <= n;
			  })
			}
			function hoopCount (n) {
				return n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it"
			 }
			 
			 function switchItUp(number){
			   switch(number){
				   case 0 : return 'Zero';
				   break;
				   case 1 : return 'One';
				   break;
				   case 2 : return 'Two';
				   break;
				   case 3 : return 'Three';
				   break;
				   case 4 : return 'Four';
				   break;
				   case 5 : return 'Five';
				   break;
				   case 6 : return 'Six';
				   break;
				   case 7 : return 'Seven';
				   break;
				   case 8 : return 'Eight';
				   break;
				   case 9 : return 'Nine';
				   break;
			   }
			 }
			
			 function solution(str){
				return str.split('').reverse().join('');
			  }
			
			  function areYouPlayingBanjo(name) {
			  return name.charAt(0) === 'R' || name.charAt(0) === 'r' ? `${name} plays banjo`
			  : `${name} does not play banjo`
			 
			}
			
			function findOdd(A) {
			  //create empty cache object to track occurrences
			  let cache = {};
			  //iterate through array adding occurrences of elements as value in key : value pair
			  A.forEach((x) => cache[x] = (cache[x] || 0) +1)
			  //return the key that has an odd value in cache object
			  return Number(Object.keys(cache).find((key) => cache[key] % 2 === 1))
			}
			
			var uniqueInOrder=function(iterable){
				let arr = []
				let ans = []
				//test for string or array, if string then split into array
				if(typeof iterable === "string"){
				  arr = iterable.split('')
				}
				else arr = iterable;
				//iterate over array, compare current entry to previous, if previous is same as current then remove previous, otherwise continue
				 arr.forEach((el, i) => {if(el != arr[i-1]){
				  ans.push(el)}                      
				})
				return ans
			  }
			
			  var min = function(list){
				list.sort((a, b) => a-b)
				return list[0];
			}
			
			var max = function(list){
				list.sort((a, b) => a-b)
				return list[list.length-1];
			}
			
			function sortByLength (array) {
				// Return an array containing the same strings,
				// ordered from shortest to longest
			   
				  return array.sort((a, b) => a.length - b.length);
			  }
			  
			  function rowSumOddNumbers(n) {
			return n * n * n
			}
			
			function setAlarm(employed, vacation){
				return employed == true && vacation == false ? true : false
				}
			
				function between(a, b) {
					let arr = []
					for(let i = a; i <= b; i++){
					  arr.push(i)
					}
					return arr;
				  }
			
				  function isPangram(string){
					let chars = [...new Set(string.toLowerCase())]
					chars = chars.filter((x) => x.charCodeAt(0) > 96 && x.charCodeAt(0) < 123).join('')
					return chars.length === 26
				  }
			
				  function calculateYears(principal, interest, tax, desired) {
			  let years = 0;
				for(let i = principal; i < desired; i = i + ((i * interest) - (i * interest *tax))){
				  years++
				}
			  return years
			}
			function solution(nums){
			
				if(nums != null){
				 return nums.sort((a, b) => a - b)
				}
				  else return []
				}
				function filter_list(l) {
					return l.filter((el) => Number.isInteger(el) == true)
				  }	
			
				  function hero(bullets, dragons){
					return bullets / 2 >= dragons;
				   }
			
				   console.log('didwork')

				   function hackingPhotosynthesis(){
					console.log('I\'m in.')
				   }

				   function getChar(c){
					return String.fromCharCode(c)
				  }

				  function sumStr(a,b) {
					return String(Number(a) + Number(b))
				  }

				  const quarterOf = (month) => {
					return month < 4 ? 1
					: month < 7 ? 2
					: month < 10 ? 3
					: 4
				   
				  }

				  String.prototype.isUpperCase = function() {
					return this.toUpperCase() === this.toString()
				  }

				  function remove (string) {
 
					let arr = string.split('')
				   
					if(arr[arr.length-1] == '!'){
					  arr.pop()
					}
				   
					return arr.join('')
				  }

				  function checkExam(array1, array2) {
					let score = 0
					
					for(let i = 0; i < array2.length; i++){
					  if(array2[i] == ''){
						score
					  }
					 else if(array2[i] == array1[i]){
					   score += 4
					 }
					 else score -= 1
					  }
					 if(score <= 0){
					   return 0
					 }
					 else return score
				   }

				   function isTriangle(a,b,c)
{
  if(a + b > c && a + c > b && b + c > a){
    return true
  }
  else return false
}

function nbDig(n, d) {
    let arr = [];
    let count = 0;
  for(let i = 0; i <= n; i++){
    arr.push(i ** 2)
  }
  let arr2 = arr.join('').split('')
  arr2.forEach((x) => {
    if(x == d){
      count++;
    }
  })
  return count;
}

function reverse(string){
  let arr = string.split(' ');
  
  return arr.reverse().join(' ');
}

function bmi(weight, height) {
  return weight / height ** 2 <= 18.5 ? "Just fine"
        : weight / height ** 2 <= 25.0 ? "that guy"
        : weight / height ** 2 <= 30.0 ? "pretty cool"
        : "extra cool"
}

function minValue(values){
  let uniqueArr = [...new Set(values)];
  return Number(uniqueArr.sort((a,b) => a - b).join(''));
}

function gimme (triplet) {
  let arr = triplet.slice();
  let sort = triplet.sort((a,b) => a -b);
  let mid = sort[1];
  return arr.indexOf(mid);
}

function round5(n){
	return Math.ceil(n/5) * 5;
}

function sumDigits(number) {
  let arr = String(number).split('')
  
  arr.map((el) => {
    if(el === '-'){
      arr.splice(arr[el], 1);
      Number(arr[el + 1]) * -1;
    }
  })
  if(arr.length === 1){
    return Number(arr[0])
  }
  return arr.reduce((a, b) => Number(a) + Number(b))
}

function main (verb, noun){
  return verb + noun;
}

let v1 = 50,
    v2 = 100,
    v3 = 150,
    v4 = 200,
    v5 = 2,
    v6 = 250;

function equal1(){
  let a = v1,  
      b = v1;  
  return a + b;
}


function equal2(){
  let a =  v6, //set number value to a
      b =  v3; //set number value to b
  return a - b;
}

function equal3(){
  let a =  v1, //set number value to a
      b =  v5; //set number value to b
  return a * b;
}

function equal4(){
  let a =  v4, //set number value to a
      b =  v5; //set number value to b
  return a / b;
}

function equal5(){
  let a =  v2, //set number value to a
      b =  v4; //set number value to b
  return a % b;

  function finalGrade (exam, projects) {
  return exam > 90 || projects > 10 ? 100
  : exam > 75 && projects > 4 ? 90
  : exam > 50 && projects > 1 ? 75
  : 0
}
}

console.log("square please!")

function powersOfTwo(n){
  let arr =[];
  for(let i = 0; i <= n; i++){
    arr.push(2 ** i)
  }
  return arr
}

function hello(name) {
  if(!name){
    return 'Hello, World!'
  }
  
  return `Hello, ${name.charAt(0).toUpperCase() + name.toLowerCase().slice(1)}!`;
}

function multiTable(number) {
  return `1 * ${number} = ${1 * number}\n2 * ${number} = ${2 * number}\n3 * ${number} = ${3 * number}\n4 * ${number} = ${4 * number}\n5 * ${number} = ${5 * number}\n6 * ${number} = ${6 * number}\n7 * ${number} = ${7 * number}\n8 * ${number} = ${8 * number}\n9 * ${number} = ${9 * number}\n10 * ${number} = ${10 * number}`
}

function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  
  return birds.filter((el) => !geese.includes(el))
};

function getGrade (s1, s2, s3) {
  let avg = (s1 + s2 + s3) / 3;
  console.log(avg)
  return avg > 90 ? 'A' 
  : avg >= 80 ? 'B'
  : avg >= 70 ? 'C'
  : avg >= 60 ? 'D'
  : 'F'
}

function stringClean(s){
  let cut = ['0','1','2','3','4','5','6','7','8','9']
  
  return s.split('').filter((el) => !cut.includes(el)).join('');
}

function countBy(x, n) {
  let z = [];
  for(let num = 1; num <= n; num++){
    z.push(x * num);
  }
  return z;
}

function findDifference(a, b) {
  return Math.abs(a.reduce((x, y) => x*y) - b.reduce((x, y) => x * y));
}

function howManyLightsabersDoYouOwn(name) {
  if(name === "Zach"){
    return 18
  }
  return 0
}

function position(letter){
  return `Position of alphabet: ${letter.charCodeAt(0) - 96}`
}

function mergeArrays(arr1, arr2) {
  if(arr1 == [] && arr2 == []){
    return []
  }
  let combArr = arr1.concat(arr2).sort((a, b) => a-b);
 
  let unique = new Set(combArr);
 
  return Array.from(unique);
}

function grow(x){
 return x.reduce((a, b) => a * b);
}


class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height
  }
}

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs((sonYearsOld * 2) - dadYearsOld)
}


var laLigaGoals = 43;
var championsLeagueGoals = 10;
var copaDelReyGoals = 5;

var totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals;

return 'squaremeupdaddy!'

return 'square'

console.log('We gettin squares today')

function take(arr, n) {
  if(arr.length <= n){
    console.log(arr)
    return arr;
  }
  else arr.pop();
  console.log(arr);
  return take(arr, n)
}


function addFive(num) {
  var total = num + 5
  return total;
}

console.log('green it up')


function distinct(a) {
  let arr =[];
  a.forEach((el) => {
    if(arr.includes(el) == false){
      arr.push(el);
    }
  })
  return arr;
}

function derive(coefficient,exponent) {
  let num1 = coefficient * exponent;
  let num2 = exponent - 1;
 
  return `${num1}x^${num2}`;
}

function nbYear(p0, percent, aug, p) {
  let pop = p0;
  let years = 0;
  let result = increment(p0, percent, aug, p, years);
 
 function increment(pop, percent, aug, p, years){
  if(pop >= p){
    console.log(years);
    return years;
  }
  else pop = Math.floor(pop += pop * (percent * .01) + aug)
  console.log(`${p0},${pop}`);
      years++;
  console.log(years);
  return increment(pop, percent, aug, p, years);
    }
  return result;
}

console.log('square me up brother')

function include(arr, item){
  return arr.includes(item);
}

function add(a,b){
    return a+b;
}

function divide(a,b){
    return a/b;
}

function multiply(a,b){
    return a*b;
}

function mod(a,b){
    return a%b;
}
   
function exponent(a,b){
    return a**b;
}
   
function subt(a,b){
    return a-b;
}

function getSize(width, height, depth){
  return [(2*width*height) + (2*height*depth) + (2*width*depth), width * height * depth];
}


function remainder(n, m){
  return n > m ? n % m :
  m % n
}

function sayHello(name) {
  return `Hello, ${name}`;
}

function whatday(num) { 

  return num == 1 ? 'Sunday' :
  num == 2? 'Monday' :
  num == 3 ? 'Tuesday' :
  num == 4 ? 'Wednesday' :
  num == 5 ? 'Thursday' :
  num == 6 ? 'Friday' :
  num == 7 ? 'Saturday' :
  'Wrong, please enter a number between 1 and 7'
  
}

function getRealFloor(n) {
  return n > 12 ? n - 2 :
  n > 0 ? n - 1 :
  n
}

function mango(quantity, price){
let discount = price * Math.floor(quantity / 3);
 
  return quantity * price - discount;
}

return 'Squares all day!'

console.log('gimme da green')

function dutyFree(normPrice, discount, hol){
  return Math.floor(hol / (normPrice * (discount * .01)))
}

function strCount(str, letter){  

  let count = 0;
 
  let arr = str.split('');
 
  arr.forEach((el) => {
    if(el == letter){
      count++;
    }
  })
 
  return count;

}

return 'all done!'

return 'Happy square of bear!'

return 'sqrsqrsqr'

return 'greenme'

return 'green'

function largestPairSum (numbers) {
  let sorted = numbers.sort((a, b) => a-b)
   
  let result = sorted[sorted.length - 1] + sorted[sorted.length - 2]
 
  return result;
}

return 'do it'

return 'suqare'

return 'update'

return 'yup'

return '!'

return 'thanks'

return 'update'

function isPalindrome(x) {
  return x.toLowerCase() === x.toLowerCase().split('').reverse().join('')
}

function calculator(a,b,sign){
  if(Number.isInteger(a) == false || Number.isInteger(b) == false){
    return 'unknown value'
  }
  return sign == '+' ? a + b :
  sign == '-' ? a -b :
  sign == '*' ? a * b :
  sign == '/' ? a / b :
  'unknown value'
}

return 'diddit!'

function usdcny(usd) {
  let cny = usd * 6.75
  return `${cny.toFixed(2)} Chinese Yuan`
}

return 'woohoo!'

function stairsIn20(s){
  let year = s.flat(365);
  
  return year.reduce((a,b) => a +b) * 20;
}

return 'Fribay!'

function twoDecimalPlaces(n) {
  return Math.round(n * 100) / 100;
}

return 'woogoo!'

function getSum(a, b)
{
  let sum = 0;
   if(a == b){
     return a
   }
  else if(a > b){
    for(let i = b; i <= a; i++){
     sum+= i;
    }
    }
    else for(let i = a; i <= b; i++){
      sum+= i;
    }
  return sum;
  }

  return 'done'

  function addBinary(a,b) {
 let sum = a + b
 
 return sum.toString(2);
}

return 'thursbday!'