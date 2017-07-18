export class SearchQuery {
	searchId: string

	setSearchId(id: string){
		this.searchId = id
		console.log("info set: " + id)
	}
	getSearchId(){
		return this.searchId
	}
}
