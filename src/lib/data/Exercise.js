import { v4 } from 'uuid';

class Exercise {
	constructor(name = 'new exercise', time = 30000, description = '', images = []) {
        this.uid = v4();
		this.name = name;
        this.time = time;
        this.description = description;
        this.images = images;
	}

	setTime(newtime) {
		this.time = newtime;
	}

	getTime() {
		return this.time;
	}
}

export default Exercise;