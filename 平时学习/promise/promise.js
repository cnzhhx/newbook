let promise = new Promise(function(resolve, reject) {
    setTimeout(() => reject(new Error("Whoops!")), 1000);
  }).then(() => {
    console.log('zhhx')
  },() => {
    console.log('zhhxxxx')
  })