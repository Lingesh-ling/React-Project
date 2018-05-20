const book = {
  title:'myBook',
  author:'Me',
  publisher: {
    name:'Lingesh'
  }
}

const {name:publishername = 'dono'} = book.publisher;

console.log(publishername)


const item = ['cofee', 'Tea', 'IceCofee']

const [, , ice = 'dono'] = item;
console.log(`get me some ${ice}`);
