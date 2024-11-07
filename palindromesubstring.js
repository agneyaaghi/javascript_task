function longest(s){
                    if(s.length<=1)return s;
                    let ml=0;
                    let start=0;
                    for(let i=0;i<s.length;i++) {
                        let len1=palind(i,i);
                        let len2=palind(i,i+1);
                        let len=Math.max(len1,len2);
                        if(len>ml) {
                            ml=len;
                            start=i-Math.floor((len-1)/2); 
                    }}
                    return s.substring(start,start+ml);
                }
                function palind(left,right) {
                    while(left>=0&&right<s.length&&s[left]===s[right]) {
                        left--;
                        right++;
                    }
                    return right-left-1;
                }
                const s="hiihello";
                console.log(longest(s));