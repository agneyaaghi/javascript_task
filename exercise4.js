var library = [{
                    author: 'bill gates',
                    title: 'the road ahead',
                    readingstatus: true
}, {
                    author: 'steve jobs',
                    title: 'walterisaaccson',
                    readingstatus: true
}, {
                    author: 'suzanne collins',
                    title: 'mockingjay:the final book of the hunger games',
                    readingstatus: false
}];
let conditiontrue = library.filter(item => item.readingstatus===true);
console.log(conditiontrue);
