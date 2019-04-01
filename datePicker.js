class DatePicker {
    constructor(date) {
        if (date) {
            this.today = new Date(date);
        } else {
            this.today = new Date();
        }

    }

    daysUntil(date) {
        let dateTarget = new Date(date);
        return Math.abs(
            parseInt((dateTarget.getTime() - this.today.getTime()) / (1000 * 60 * 60 * 24))
        );
    }
}

module.exports = DatePicker;
