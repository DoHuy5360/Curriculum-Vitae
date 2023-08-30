class Image {
	constructor(dir) {
		this.dir = dir;
	}
    get(img){
        return this.dir + "/" + img
    }
}
export default Image