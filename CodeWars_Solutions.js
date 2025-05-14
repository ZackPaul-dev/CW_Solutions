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