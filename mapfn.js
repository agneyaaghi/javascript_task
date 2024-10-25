let students=[
{name:'Anu',score:90,subject:'javascript'},
{name:'arya',score:87,subject:'javascript'},
{name:'diya',score:62,subject:'javascript'},
{name:'achu',score:60,subject:'javascript'},
{name:'miya',score:85,subject:'javascript'},];

let studentfilter=students.filter((mark)=>mark.score>70);
console.log(studentfilter);

let grade=studentfilter.map(student=>{let grade;
if(student.score>=90)grade='A';
else if(student.score>=80)grade='B';
else if(student.score>=70)grade='C';
else if(student.score>=60)grade='D';
else grade='F';
return{...student,grade};});
console.log(grade);
               
let total=students.reduce((total,student)=>total+student.score,0);
let avg=total/students.length;
console.log(avg);

let aboveavg=students.filter(student=>student.score>avg).map(student=>student.name);
console.log(aboveavg);


