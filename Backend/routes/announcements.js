const express = require("express");
const Announcements = require("../models/Announcements");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const { query, validationResult } = require("express-validator");


//Route 1: Get all the annoucements : GET "api/announcement/fetchallannouncements" .  login required
router.get("/fetchallannouncements", fetchuser, async (req, res) => {
  try {
    const annoucements = await Announcements.find();

    res.json( annoucements );
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server Error!");
  }
});


//Route 2: Add a new note : POST "api/announcement/addannouncement" .  login required
router.post(
  "/addannouncement",
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
      const { title, description } = req.body;

      //if there are errors return bad error and the errors
      const result = validationResult(req);
      //here ! is missing below
      if (result.isEmpty()) {
        return res.status(400).json({ errors: result.array() });
      }

      //creating a new announcement
      const annoucement = new Announcements({
        title,
        description,
        user: req.user.id
      });
      //console.log(annoucement);
      const savedAnnouncement = await annoucement.save();
      res.json(savedAnnouncement);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server Error!");
    }
  }
);


//Route 3: Update existing  notes : PUT "api/announcement/updateannouncement" .  login required
router.put(
    "/updateannouncement/:id",
    fetchuser,
    async (req, res) => {

        try {
            
        
        const {title,description}=req.body;

        //create a newNote object
        const newAnnouncement={};
        if(title){newAnnouncement.title=title};
        if(description){newAnnouncement.description=description};
        
        //find the note to update and updating it
        let announcement=await Announcements.findById(req.params.id);
        if(!announcement){
            return res.status(404).send("Not found")
        }

        if(announcement.user.toString()!==req.user.id){
            return res.status(401).send("Not allowed")
        }

        announcement = await Announcements.findByIdAndUpdate(req.params.id,{$set:newAnnouncement},{new:true});
        res.json({announcement});
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal server Error!");
        }
    });


//Route 4: Deleting existing  note : DELETE "api/announcement/deleteannouncement" .  login required
router.delete(
    "/deleteannouncement/:id",
    fetchuser,
    async (req, res) => {

        try {
            


        //find the note to delete and deleting it
        let annoucement=await Announcements.findById(req.params.id);
        if(!annoucement){
            return res.status(404).send("Not found")
        }

        //Allow deletion if user own this note
        if(annoucement.user.toString()!==req.user.id){
            return res.status(401).send("Not allowed")
        }

        annoucement = await Announcements.findByIdAndDelete(req.params.id);
        res.json({"Success":"Note has been deleted",annoucement:annoucement});
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal server Error!");
        }
    });

module.exports = router;
