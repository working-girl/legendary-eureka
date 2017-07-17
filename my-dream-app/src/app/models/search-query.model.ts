export class SearchQuery {
	searchId: number

	setSearchId(id: number){
		this.searchId = id
		console.log("info set: " + id)
	}
	getSearchId(){
		return this.searchId
	}
}
