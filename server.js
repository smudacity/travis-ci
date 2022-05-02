function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log('Containers rule!');
    console.log('Env variable Deal of the day:', process.env.deal_OF_THE_DAY)
    await sleep(5000);
  }
}

main();
