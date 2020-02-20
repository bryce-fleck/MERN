const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Business = require("../models/Business");
const token = require("../token");

// todo build backend that accepts work hours & free time

// test route
// GET api/availability/test
router.get("/test", token, async (req, res) => {
  res.json("availability Get test route is working as private route");
});

// Availability Model work hours
const AvailabilitySchema = new mongoose.Schema({
  business: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "business"
  },
  day_of_week1: {
    type: String
  },
  work1: {
    type: Boolean
  },
  start_time1: {
    type: String
  },
  end_time1: {
    type: String
  },
  start_lunch1: {
    type: String
  },
  end_lunch1: {
    type: String
  },

  day_of_week2: {
    type: String
  },
  work2: {
    type: Boolean
  },
  start_time2: {
    type: String
  },
  end_time2: {
    type: String
  },
  start_lunch2: {
    type: String
  },
  end_lunch2: {
    type: String
  },
  day_of_week3: {
    type: String
  },
  work3: {
    type: Boolean
  },
  start_time3: {
    type: String
  },
  end_time3: {
    type: String
  },
  start_lunch3: {
    type: String
  },
  end_lunch3: {
    type: String
  },

  day_of_week4: {
    type: String
  },
  work4: {
    type: Boolean
  },
  start_time4: {
    type: String
  },
  end_time4: {
    type: String
  },
  start_lunch4: {
    type: String
  },
  end_lunch4: {
    type: String
  },

  day_of_week5: {
    type: String
  },
  work5: {
    type: Boolean
  },
  start_time5: {
    type: String
  },
  end_time5: {
    type: String
  },
  start_lunch5: {
    type: String
  },
  end_lunch5: {
    type: String
  },

  day_of_week6: {
    type: String
  },
  work6: {
    type: Boolean
  },
  start_time6: {
    type: String
  },
  end_time6: {
    type: String
  },
  start_lunch6: {
    type: String
  },
  end_lunch6: {
    type: String
  },
  day_of_week7: {
    type: String
  },
  work7: {
    type: Boolean
  },
  start_time7: {
    type: String
  },
  end_time7: {
    type: String
  },
  start_lunch7: {
    type: String
  },
  end_lunch7: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});
Availability = mongoose.model("availability", AvailabilitySchema);

// create or update availability

// @route    POST api/profile
// @desc     Create or update user profile
// @access   Private
router.post("/", token, async (req, res) => {
  const {
    day_of_week1,
    work1,
    start_time1,
    end_time1,
    start_lunch1,
    end_lunch1,
    day_of_week2,
    work2,
    start_time2,
    end_time2,
    start_lunch2,
    end_lunch2,
    day_of_week3,
    work3,
    start_time3,
    end_time3,
    start_lunch3,
    end_lunch3,
    day_of_week4,
    work4,
    start_time4,
    end_time4,
    start_lunch4,
    end_lunch4,
    day_of_week5,
    work5,
    start_time5,
    end_time5,
    start_lunch5,
    end_lunch5,
    day_of_week6,
    work6,
    start_time6,
    end_time6,
    start_lunch6,
    end_lunch6,
    day_of_week7,
    work7,
    start_time7,
    end_time7,
    start_lunch7,
    end_lunch7
  } = req.body;

  // Build availability object
  const availabilityFields = {};
  availabilityFields.business = req.business.id;
  if (day_of_week1) availabilityFields.day_of_week1 = day_of_week1;
  if (work1) availabilityFields.work1 = work1;
  if (start_time1) availabilityFields.start_time1 = start_time1;
  if (end_time1) availabilityFields.end_time1 = end_time1;
  if (start_lunch1) availabilityFields.start_lunch1 = start_lunch1;
  if (end_lunch1) availabilityFields.end_lunch1 = end_lunch1;
  if (day_of_week2) availabilityFields.day_of_week2 = day_of_week2;
  if (work2) availabilityFields.work2 = work2;
  if (start_time2) availabilityFields.start_time2 = start_time2;
  if (end_time2) availabilityFields.end_time2 = end_time2;
  if (start_lunch2) availabilityFields.start_lunch2 = start_lunch2;
  if (end_lunch2) availabilityFields.end_lunch2 = end_lunch2;

  if (day_of_week3) availabilityFields.day_of_week3 = day_of_week3;
  if (work3) availabilityFields.work3 = work3;
  if (start_time3) availabilityFields.start_time3 = start_time3;
  if (end_time3) availabilityFields.end_time3 = end_time3;
  if (start_lunch3) availabilityFields.start_lunch3 = start_lunch3;
  if (end_lunch3) availabilityFields.end_lunch3 = end_lunch3;

  if (day_of_week4) availabilityFields.day_of_week4 = day_of_week4;
  if (work4) availabilityFields.work4 = work4;
  if (start_time4) availabilityFields.start_time4 = start_time4;
  if (end_time4) availabilityFields.end_time4 = end_time4;
  if (start_lunch4) availabilityFields.start_lunch4 = start_lunch4;
  if (end_lunch4) availabilityFields.end_lunch4 = end_lunch4;

  if (day_of_week5) availabilityFields.day_of_week5 = day_of_week5;
  if (work5) availabilityFields.work5 = work5;
  if (start_time5) availabilityFields.start_time5 = start_time5;
  if (end_time5) availabilityFields.end_time5 = end_time5;
  if (start_lunch5) availabilityFields.start_lunch5 = start_lunch5;
  if (end_lunch5) availabilityFields.end_lunch5 = end_lunch5;

  if (day_of_week6) availabilityFields.day_of_week6 = day_of_week6;
  if (work6) availabilityFields.work6 = work6;
  if (start_time6) availabilityFields.start_time6 = start_time6;
  if (end_time6) availabilityFields.end_time6 = end_time6;
  if (start_lunch6) availabilityFields.start_lunch6 = start_lunch6;
  if (end_lunch6) availabilityFields.end_lunch6 = end_lunch6;

  if (day_of_week7) availabilityFields.day_of_week7 = day_of_week7;
  if (work7) availabilityFields.work7 = work7;
  if (start_time7) availabilityFields.start_time7 = start_time7;
  if (end_time7) availabilityFields.end_time7 = end_time7;
  if (start_lunch7) availabilityFields.start_lunch7 = start_lunch7;
  if (end_lunch7) availabilityFields.end_lunch7 = end_lunch7;

  console.log(availabilityFields);

  try {
    // Using upsert option (creates new doc if no match is found):
    let availability = await Availability.findOneAndUpdate(
      { business: req.business.id },
      { $set: availabilityFields },
      { new: true, upsert: true }
    );

    res.json(availability);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.get("/work", async (req, res) => {
  let availability = await Availability.findOne({
    business: "5e4ec3c7f50837224839ede4"
  });

  console.log(availability);
});

// export the router
module.exports = router;
