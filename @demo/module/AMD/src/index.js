requirejs.config({
  baseUrl: 'src',
  paths: {
    main: 'main',
    sec: "sec",
    sec_2:"sec_2",
    third:"third"
  }
});

// Start the main app
// requirejs(['main'], function (main) {
//   console.log(main);
// });

// Start the main app
requirejs(["sec"],function(sec){
  sec.action();
});
