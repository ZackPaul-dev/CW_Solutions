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