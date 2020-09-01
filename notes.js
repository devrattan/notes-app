const fs = require('fs');
const chalk = require('chalk');

const getNotes = function()
{
    return 'Your notes...';
}

const addNotes = function (title,body)
{
  const notes = loadNotes();
  
//   const duplicateNotes = notes.filter(function(notes){
      
//       return notes.title === title;
//   })

  const duplicateNote = notes.find((notes)=> notes.title === title)

  debugger

  if(!duplicateNote)
  {

  notes.push({
      title: title,
      body : body
  })

  saveNotes(notes);
  console.log(chalk.green('notes added'));
}
else
{
   console.log('notes title has been used before,ADD a UNIQUE TITLE');
}


}

const saveNotes = function(notes)
{
   const dataJSON = JSON.stringify(notes);
   fs.writeFileSync('notes.json',dataJSON);
}

var loadNotes = function()
{
    try
    {
   const dataBuffer = fs.readFileSync('notes.json');
   const dataJSON = dataBuffer.toString();
   return JSON.parse(dataJSON);
    }
    catch(e)
    {
        return [];
    }
}

const removeNote = function(title)
{
// {
//   const notes = loadNotes();
//   const removenote = notes.filter(function(){
//       return notes.title === title;
//   })

// console.log(removenote);
// return const removeNote = (title) => {
    const notes = loadNotes()
    const NotesToKeep = notes.filter((note) => note.title !== title)
    if (notes.length > NotesToKeep.length) {
        console.log(chalk.green.inverse('Note Removed!'));
        saveNotes(NotesToKeep);
    } else {
        console.log(chalk.red.inverse('No note found'));
    }
    
}

const listNotes = function()
{
    console.log(chalk.bgRed.green(getNotes()));
    const notes = loadNotes();
    notes.forEach((note) => {
       console.log(note.title);        
    });
}

const readNotes = function(title)
{
   const notes = loadNotes();
   console.log(notes);
   const note  = notes.find((note)=> note.title === title);

   console.log(note);
   if(note)
   {
       console.log(chalk.bgGreenBright.redBright(note.title));
       console.log(chalk.bgBlack.white(note.body));
   }
   else
   {
     console.log(chalk.bgRed.green("NOTE not PRESENT"));
   }
}




module.exports = {

    getNotes : getNotes,
    addNotes : addNotes,
    removeNote : removeNote,
    listNotes : listNotes,
    readNotes : readNotes
}