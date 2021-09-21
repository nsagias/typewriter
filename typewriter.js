let sentence = "hello there from lighthouse labs";

sentence = "it works by changing to let";
sentence +=  "\n";

for (let i = 0; i < sentence.length; i++) {
  const waitTime = (1 * (50 * i));
  setTimeout(()=>{
    process.stdout.write(sentence[i]);
  }, waitTime);
}