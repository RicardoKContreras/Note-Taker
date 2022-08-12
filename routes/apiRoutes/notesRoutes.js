const router = require('express').Router();
const { filterByQuery, findById, createNewNote, validateNote} = require('../../lib/notes');
const {notes} = require('../../Develop/db/db.json');


    
router.get('/notes', (req,res) => {
    let results = notes;
    if(req.query) {
     results = filterByQuery(req.query, results);
    }
    console.log(req.query)
   // res.send("SUCCESS!!");
   console.log("The get request is working.");
    res.json(results);
 });
 
//  router.get('/notes/:id', (req, res) => {
//      const result= findById(req.params.id, notes);
//     if(result){
//      res.json(result);
//     } else {
//      res.sendStatus(404);
//     }
//  });

//  router.post('/notes', (req,res) => {
//     //req.body is where our incoming content will be
//     //set id based on what the next index of the array will be
//     req.body.id = notes.length.toString();

// //if any data in req.body is incorrect, send 400 error back
// if(!validateNote(req.body)) {
//     res.status(400).send('The note is not properly formatted.');
// } else{
//       //add animal to json file and animals array in this function
//       const noter = createNewNote(req.body, notes);

//       console.log(noter);
//     //    res.json(req.body);
//       res.json(noter);
      
// }  
// });
// */
module.exports = router;
console.log('here');