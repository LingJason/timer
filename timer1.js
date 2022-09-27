//Extract from command
const args = process.argv.slice(2);
console.log(args);

for(const arg of args) {
  const interval = Number(arg);
  if (interval < 0) {
      continue;
      }
  if (isNaN(interval)) {
    continue;
  }
  setTimeout(() => {
    process.stdout.write('\x07');
    console.log(interval);
  }, interval * 1000)

};
