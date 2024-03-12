export class Poste {
    startTime: number;
    endTime: number;

    constructor() {
        const currentHour = new Date().getHours();
        this.startTime = currentHour - (currentHour % 8);
        this.endTime = this.startTime + 8;
    }

    isInTimeRange(checkDate: Date): boolean {
        const checkHour = checkDate.getHours();
        const isWithinRange =
            (this.startTime <= this.endTime &&
                checkHour >= this.startTime &&
                checkHour < this.endTime) ||
            (this.startTime > this.endTime &&
                (checkHour >= this.startTime || checkHour < this.endTime));

        return isWithinRange;
    }
}
