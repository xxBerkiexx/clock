//Time class to retrieve individual time variables
export class Time {
    constructor() {
        this.date = new Date();
        this.hr = this.date.getHours();
        this.min = this.date.getMinutes();
        this.sec = this.date.getSeconds();
    }

    currentHour() {
        //Get rid of military time
        if (this.hr == 13) {
            this.hr = 1;
        }
        else if (this.hr == 14) {
            this.hr = 2;
        }
        else if (this.hr == 15) {
            this.hr = 3;
        }
        else if (this.hr == 16) {
            this.hr = 4;
        }
        else if (this.hr == 17) {
            this.hr = 5;
        }
        else if (this.hr == 18) {
            this.hr = 6;
        }
        else if (this.hr == 19) {
            this.hr = 7;
        }
        else if (this.hr == 20) {
            this.hr = 8;
        }
        else if (this.hr == 21) {
            this.hr = 9;
        }
        else if (this.hr == 22) {
            this.hr = 10;
        }
        else if (this.hr == 23) {
            this.hr = 11;
        }

        return this.hr;
    }

    currentMinute() {
        if (this.min < 10) {
            this.min = "0" + this.min;
        }

        return this.min;
    }

    currentSecond() {
        if (this.sec < 10) {
            this.sec = "0" + this.sec;
        }

        return this.sec;
    }
}