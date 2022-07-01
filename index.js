/* Your Code Here */
// https://github.com/jsoto007/phase-1-context-lab.git
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(array) {
    const employeeInfo = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    };
    return employeeInfo;

}

function createEmployeeRecords(array) {
    return array.map(function (row) {
        return createEmployeeRecord(row);
    })
}

function createTimeInEvent(array) {
    let [date, hour] = array.split(' ')

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,

    })
    return this;
}

function createTimeOutEvent(array) {
    let [date, hour] = array.split(' ')

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,

    })
    return this;
}

function hoursWorkedOnDate(date, targetDate = "2044-03-15") {
    const foundTimeIn = this.timeInEvents.find(object => object.date === targetDate);
    const foundTimeOut = this.timeOutEvents.find(object => object.date === targetDate);
    let workedHours = foundTimeOut.hour - foundTimeIn.hour;
    return (workedHours / 100);
}


function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate(date) * this.payPerHour
}