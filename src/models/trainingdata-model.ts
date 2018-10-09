export class TrainingDataModel {
 
    constructor(public name: string,
                public lastChecked: Date,
                public repetitions: number,
                public totalRepetitions: number,
                public active: boolean,
                public done: boolean,
                ) {
 
    }
 
    setName(name: string): void {
        this.name = name;
    }
 
    setLastChecked(lastChecked: Date): void {
        this.lastChecked = lastChecked;
    }
 
    setRepetitions(reps: number): void {
        this.repetitions = reps;
    }

    addToTotalRepetitions(repetitions: number): void {
        this.totalRepetitions += repetitions;
    }
 
    // deductFromTotalRepetitions(repetitions: number): void {
    //     this.totalRepetitions -= repetitions;
    // }
 
    setIsActive(active: boolean): void {
        this.active = active;
    }

    setIsDone(active: boolean): void {
        this.active = active;
    }    
}