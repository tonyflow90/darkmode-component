import { v4 } from 'uuid';

import Exercise from './Exercise.js';

class Workout {
	constructor(name = 'new workout', exercises = [], pauseTime = 0) {
		this.uid = v4();
		this.name = name;
		this.exercises = exercises;
		this.pauseTime = pauseTime;
	}

	setPauseTime(newtime) {
		this.pauseTime = newtime;
	}

	getPauseTime() {
		return this.pauseTime;
	}
}

export default Workout;