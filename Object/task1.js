// var obj={
//     name: 'Mercedes Benz',
//     model: 'C-Class',
//     manufacturer: 'Daimler AG company',
//     length: '4686mm',
//     'cargo capacity': '12.6 cubic feet'
//   }
// console.log(obj); 

const animal = {

  canJump: true
  
  };
  
  const bird = Object.create(animal);
  
  bird.canFly = true;
  
  bird.hasFeathers = true;
  function birdCan()
  {
    for (const i in bird)
    {
      if (bird.hasOwnProperty(i)){
      console.log(`${i}:${bird[i]}`);
    }
      }
  }
  birdCan();