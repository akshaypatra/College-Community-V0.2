const Queries=require('../models/Queries');
const express=require('express');
const router=express.Router();
const fetchuser=require('../middleware/fetchuser');
const {query,validationResult}=require('express-validator');


//Route 1: Get all the Queries : GET "api/helpandsupport/fetchallqueries" .  login required
router.get("/fetchallqueries", fetchuser, async (req, res) => {
    try {
      const queries = await Queries.find();
  
      res.json( queries );
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server Error!");
    }
  });


  //Route 2: Add a new note : POST "api/helpandsupport/addQuery" .  login required
router.post(
    "/addQuery",
    fetchuser,
    [
        query(
        "description",
        "Enter a valid description .Atleast 5 characters"
      ).isLength({ min: 5 }),
    ],
    async (req, res) => {
      try {
        const { name,type, description } = req.body;
  
        //if there are errors return bad error and the errors
        const result = validationResult(req);
        //here ! is missing below
        if (result.isEmpty()) {
          return res.status(400).json({ errors: result.array() });
        }
  
        //creating a new announcement
        const queries = new Queries({
            name,
            type,
          description,
          user: req.user.id,
          
        });
        //console.log(annoucement);
        const savedQueries = await queries.save();
        res.json(savedQueries);
      } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server Error!");
      }
    }
  );



  //Route 3: Add Reply to a query : POST "api/helpandsupport/:queryId/reply" .  login required
// PUT request to add a reply to a comment
router.put('/:queryId/reply', async (req, res) => {
    
    const { user, content } = req.body;

    try {
        // Find the query with the provided commentId
        const query = await Queries.findById(req.params.queryId);
        //console.log('Received commentId:', query);
        if (!query) {
            return res.status(404).json({ message: 'Query not found' });
        }

        

        // Add the reply
        query.replies.push({ user, content });

        // Save the updated query
        await query.save();

        res.status(200).json({ message: 'Reply added successfully', query });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;