function Maxnum(nums) {
  let distinct = [...new Set(nums)];
  distinct.sort((a, b)=>b-a);
  if(distinct.length<3) {
  return distinct[0];  
  }
  return distinct[2];
}
console.log(Maxnum([3,2,1]));
