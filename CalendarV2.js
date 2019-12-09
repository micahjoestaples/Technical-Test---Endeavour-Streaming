var DateDiff = {
//Formula to calculate the amount of days

    const event = new Date('August 19, 1975 23:15:30');
    
inDays: function(d1, d2) {
        var t2 = d2.event.setDate(24);
        var t1 = d1.event.setDate(24);

        return parseInt((t2-t1)/(24*3600*1000));
    },
//Formula to calculate the amount of weeks
    inWeeks: function(d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();

        return parseInt((t2-t1)/(24*3600*1000*7));
    },
//Formula to calculate the amount of Months
    inMonths: function(d1, d2) {
        var d1Y = d1.getFullYear();
        var d2Y = d2.getFullYear();
        var d1M = d1.getMonth();
        var d2M = d2.getMonth();

        return (d2M+12*d2Y)-(d1M+12*d1Y);
    },
//Formula to calculate the amount of years
    inYears: function(d1, d2) {
        return d2.getFullYear()-d1.getFullYear();
    }
}

var dString= prompt("What is your Date of Birth Please use the following format MM/ DD/ YYYY");
//var dString ="July, 22, 1989";


var d1 = new Date(dString); //d1 is the date that the user enters
var d2 = new Date();  //d2 is the static date

document.write("<br />Number of <b>days</b> since "+dString+": "+DateDiff.inDays(d1, d2));
document.write("<br />Number of <b>weeks</b> since "+dString+": "+DateDiff.inWeeks(d1, d2));
document.write("<br />Number of <b>months</b> since "+dString+": "+DateDiff.inMonths(d1, d2));
document.write("<br />Number of <b>years</b> since "+dString+": "+DateDiff.inYears(d1, d2));
