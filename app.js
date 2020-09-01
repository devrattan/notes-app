const fs = require('fs');
const notes = require('./notes');
const yargs = require ('yargs');

//*%?section1
// const chalk = require('chalk');
// const log = console.log;
// fs.writeFileSync('notes.txt','My name is Dev and I am the creator of this file');

// fs.appendFileSync('notes.txt','I coded it to insert it');
// const msg = getNotes('This is your own notes.');
// console.log(msg);

// log(chalk.green('Success')+chalk.blue.bgRed.bold(' showing')+chalk.cyan.underline('colors','inside','the','same','function')+chalk.italic(' with italics')+chalk.bgBlue.inverse(' and a bit inverse too') +chalk.red('console'))

//*%?/section1

//*%?section 2
console.log(process.argv);

//%?process.arv
// var command = process.argv[2];

// if (command === 'add')
// {
//     console.log("Adding note ");
// }

// else if (command === 'remove')
// {
//     console.log("removing note");
// }
//%?/process.argv


//CREATE YARGS VERSION
yargs.version('1.1.0');

//CREATE ADD COMMAND
yargs.command({
    command:'add',
    describe:'Adding a new note',
    builder : {
        title: {
        describe: 'Note title',
        demandOption: true,
        type:'string'
    },
    body :{
        describe : 'The Note described',
        demandOption : true,
        type : 'string'
    }
    },
    
    handler: function(argv){
             notes.addNotes(argv.title,argv.body);
    } 
}
)
//CREATE REMOVE COMMAND
yargs.command({
        command : 'remove',
        describe : 'Remove a note',
        builder : {
            title: {
            describe: 'Note title',
            demandOption: true,
            type:'string'
        }},
        handler : function (argv) {
            console.log('inside remove command handler')
            notes.removeNote(argv.title);
        }
    })
 


//CREATE READ COMMAND
yargs.command(
    {
        command : 'read',
        describe : 'Read a note',
        builder:{
            title:{
                describe:'note title',
                demandOption: true,
                type:'string'
            }
        },
        handler : function (argv) {
            console.log("Reading your notes");
            notes.readNotes(argv.title);
        }
    }
 
)

// CREATE LIST COMMAND
yargs.command(
    {
        command : 'list',
        describe : 'listing  note',
        handler : function () {
            console.log("listing  note");
            notes.listNotes();

        }
    }
 
)


yargs.parse();
//console.log(yargs.argv);

