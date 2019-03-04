const ls = require('./ls')

function promt () {

  process.stdout.write('prompt > ');

  process.stdin.on ('data', (data) =>{
  const cmd = data.toString().trim();

    if (cmd === 'ls') {
      ls()
    }
    if (cmd === 'pwd') {
      process.stdout.write ('You typed: ' +  process.cwd(cmd))
    }

  process.stdout.write ('\nprompt > ')

})

}
module.exports = promt;
