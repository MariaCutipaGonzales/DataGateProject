const jsonConcat = require('json-concat');

jsonConcat({
    src: "mock/data",
    dest: "mock/data.json",
}, function(json){
    console.log(json);
});