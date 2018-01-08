var stdin = process.stdin,
    inputChunks = [],
    myArgs = process.argv.slice(2);

const streamSamplerHelper = require('./stream_sampler_helper.js'); 


streamSampler = function() {
  var charachterStream = "";
  var representativeRandomSampleSize = 0;
  var charachterStreamLength = 0;
  var representativeRandomSample = "";
  var uniqueRandomInts = [];
  
  if(myArgs && myArgs.length == 1 && isInt(myArgs[0])) {
    representativeRandomSampleSize =  parseInt(myArgs[0]) ;
  } else {
    return "";
  }

  if(inputChunks && inputChunks.length == 1) {
    charachterStream = inputChunks[0];
  } else {
    return ""; 
  }

  if(charachterStream.length >= representativeRandomSampleSize) {
    charachterStreamLength = charachterStream.length;
  } else {
    return "";    
  }

  uniqueRandomInts = streamSamplerHelper.getUniqueRandomInts(representativeRandomSampleSize, charachterStreamLength);

  for(var i = 0; i < uniqueRandomInts.length; i++) {
    representativeRandomSample += charachterStream[uniqueRandomInts[i]];
  }

  return representativeRandomSample;
};


stdin.resume();
stdin.setEncoding('utf8');

stdin.on('data', function (chunk) {
  inputChunks.push(chunk);
});

stdin.on('end', function() {
  console.log(streamSampler());
});