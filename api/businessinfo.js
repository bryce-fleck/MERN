const express = require("express");
const router = express.Router();
const BusinessInfo = require("../models/BusinessInfo");
const Business = require("../models/Business");
const Availability = require("../models/Availability");
const token = require("../token");

// test route
// GET api/businessinfo
router.get("/test", async (req, res) => {
  res.json("business info Get test route is working");
});

// @route    POST api/businessinfo
// @desc     Create or update business info
// @access   Private
router.post("/", token, async (req, res) => {
  const {
    address,
    city,
    state,
    zip,
    company,
    youtube,
    twitter,
    facebook,
    linkedin,
    instagram,
    snapchat,
    tiktok
  } = req.body;

  // Build business info object
  const businessInfoFields = {};
  businessInfoFields.business = req.business.id;
  if (company) businessInfoFields.company = company;

  // Build business location object
  businessInfoFields.location = {};
  if (address) businessInfoFields.location.address = address;
  if (city) businessInfoFields.location.city = city;
  if (state) businessInfoFields.location.state = state;
  if (zip) businessInfoFields.location.zip = zip;

  // Build social object
  businessInfoFields.social = {};
  if (youtube) businessInfoFields.social.youtube = youtube;
  if (twitter) businessInfoFields.social.twitter = twitter;
  if (facebook) businessInfoFields.social.facebook = facebook;
  if (linkedin) businessInfoFields.social.linkedin = linkedin;
  if (instagram) businessInfoFields.social.instagram = instagram;
  if (snapchat) businessInfoFields.social.snapchat = snapchat;
  if (tiktok) businessInfoFields.social.tiktok = tiktok;

  try {
    // Using upsert option (creates new doc if no match is found):
    let businessInfo = await BusinessInfo.findOneAndUpdate(
      { business: req.business.id },
      { $set: businessInfoFields },
      { new: true, upsert: true }
    );
    res.json(businessInfo);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    GET api/businessinfo/all
// @desc     gets all the businesses in the db
// @access   Public
router.get("/all", token, async (req, res) => {
  try {
    const businesses = await BusinessInfo.find().sort({ date: -1 });
    console.log(businesses);

    const availability = await Availability.find({ business: req.business.id });
    console.log(availability);

    res.json({ AllBusiness: businesses, AllAvailabiltiy: availability });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    GET api/businessinfo/:id
// @desc     get business info by db _id
// @access   Public
router.get("/:id", async (req, res) => {
  try {
    // in find req.params - this grabs the :id and searches db for it
    const businesses = await BusinessInfo.find(req.params.id);
    res.json(businesses);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId")
      return res.status(404).json({ msg: "Post not found" });
  }
});

// @route    DELETE api/business/:id
// @desc     Delete business, and availability and services
// @access   Private
router.delete("/", token, async (req, res) => {
  try {
    // Remove user posts
    await BusinessInfo.deleteMany({ business: req.business.id });
    // Remove profile
    await Availability.findOneAndRemove({ business: req.business.id });
    // Remove user
    await Business.findOneAndRemove({ _id: req.business.id });

    res.json({ msg: "Business removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// export the router
module.exports = router;