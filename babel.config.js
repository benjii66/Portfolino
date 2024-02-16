// module.exports = function(api) {
//     // api.cache(true);
  
//     const isTest = api.env('test');
  
//     if (isTest) {
//       return {
//         presets: [
//           '@babel/preset-env',
//           '@babel/preset-react',
//           '@babel/preset-typescript',
//         ],
//       };
//     }

//     return {};
//   };
  
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-react',
    '@babel/preset-typescript', 
    
  ],
};

