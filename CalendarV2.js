var DateDiff = {
//formula to calculate the amount of days until Christmas
    inDays: function(d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();

        return parseInt((t2-t1)/(24*36000*10000));
    },

//Formula to calculate the amount of Months until New Year
    inMonths: function(d1, d2) {
        var d1Y = d1.getFullYear();
        var d2Y = d2.getFullYear();
        var d1M = d1.getMonth();
        var d2M = d2.getMonth();

        return (d2M+12*d2Y)-(d1M+12*d1Y);
    },
//Formula to calculate your age
    inYears: function(d1, d2) {
        return d2.getFullYear()-d1.getFullYear();
    }
}

var dString= prompt("What is your Date of Birth Please use the following format MM/ DD/ YYYY");


var d1 = new Date(dString); //d1 is the date that the user enters
var d2 = new Date();  //d2 is the static date

document.write("<br />Number of <b>days</b> untill christmas "+dString+": "+DateDiff.inDays(d1, d2));
document.write("<br />Number of <b>months</b> until new years "+dString+": "+DateDiff.inMonths(d1, d2));
document.write("<br />You are <b>years</b>  "+dString+": "+DateDiff.inYears(d1, d2));
