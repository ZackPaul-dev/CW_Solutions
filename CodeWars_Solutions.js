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
    else if(pageIndex + 1 < this.pageCount() || this.collection.length % this.num === 0){
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