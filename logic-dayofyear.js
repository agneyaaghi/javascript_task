function dayOfYear(dateStr) 
{
const date=new Date(dateStr);
return Math.floor((date-new Date(date.getFullYear(),0,0))/(1000*60*60*24));
}
console.log(dayOfYear("2019-01-19"));