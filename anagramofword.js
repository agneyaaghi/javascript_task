function anagrams(words) {
                    let map = {};
                    for (let word of words) {
                        let sorted = word.split('').sort().join('');
                        if (!map[sorted]) {
                            map[sorted] = [];
                        }
                        map[sorted].push(word);
                    }
                    return Object.values(map);
                }
                let words = [ "who", "how", "ten", "net", "pen"];
                console.log(anagrams(words));