function length(s){
                let map = new Map();
                let max= 0;
                let left = 0;
                for (let right = 0; right < s.length; right++) {
                    if (map.has(s[right]) && map.get(s[right]) >= left) {
                        left = map.get(s[right]) + 1;
                    }
                    map.set(s[right], right);
                    max= Math.max(max, right - left + 1);
                }
                return max;
}
const s = "hiihello";
console.log(length(s));
