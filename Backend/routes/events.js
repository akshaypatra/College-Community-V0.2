const express = require("express");
const Events = require("../models/Events");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const { query, validationResult } = require("express-validator");


//Route 1: Get all the annoucements : GET "api/event/fetchallevents" .  login required
router.get("/fetchallevents", fetchuser, async (req, res) => {
  try {
    const events = await Events.find();

    res.json( events );
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server Error!");
  }
});


//Route 2: Add a new note : POST "api/event/addevent" .  login required
router.post(
  "/addevent",
  fetchuser,
  [
    query("title", "Enter a valid title.Atleast 3 characters ").isLength({
      min: 3,
    }),

    query(
      "description",
      "Enter a valid description .Atleast 5 characters"
    ).isLength({ min: 5 }),
  ],
  async (req, res) => {
    try {
      const { title, description ,link} = req.body;

      //if there are errors return bad error and the errors
      const result = validationResult(req);
      //here ! is missing below
      if (result.isEmpty()) {
        return res.status(400).json({ errors: result.array() });
      }

      //creating a new announcement
      const event = new Events({
        title,
        description,
        link,
        user: req.user.id
      });
      //console.log(annoucement);
      const savedEvent = await event.save();
      res.json(savedEvent);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server Error!");
    }
  }
);


//Route 3: Update existing  notes : PUT "api/event/updateevent" .  login required
router.put(
    "/updateevent/:id",
    fetchuser,
    async (req, res) => {

        try {
            
        
        const {title,description,link}=req.body;

        //create a newNote object
        const newEvent={};
        if(title){newEvent.title=title};
        if(description){newEvent.description=description};
        if(link){newEvent.link=link};
        
        //find the note to update and updating it
        let event=await Events.findById(req.params.id);
        if(!event){
            return res.status(404).send("Not found")
        }

        if(event.user.toString()!==req.user.id){
            return res.status(401).send("Not allowed")
        }

        event = await Events.findByIdAndUpdate(req.params.id,{$set:newEvent},{new:true});
        res.json({event});
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal server Error!");
        }
    });


//Route 4: Deleting existing  note : DELETE "api/event/deleteevent" .  login required
router.delete(
    "/deleteevent/:id",
    fetchuser,
    async (req, res) => {

        try {
            


        //find the note to delete and deleting it
        let event=await Events.findById(req.params.id);
        if(!event){
            return res.status(404).send("Not found")
        }

        //Allow deletion if user own this note
        if(event.user.toString()!==req.user.id){
            return res.status(401).send("Not allowed")
        }

        event = await Events.findByIdAndDelete(req.params.id);
        res.json({"Success":"Event has been deleted",event:event});
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal server Error!");
        }
    });

module.exports = router;
