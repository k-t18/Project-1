const mongoose = require('mongoose');

const MeetingSchema = new mongoose.Schema({
    Hostname: {
        type: String,
        // ref: "User",
        required: [true, "Please provide a host name "],
    },
    Book: {
        type: String,
        required: [true, "Please Provide Book Name"]
    },
    Genre: {
        type: String,
        required: [true, "Please Provide the Genre"]
    },
    Date: {
        type: String,
        required: [true, "Please Provide a Date within 1 week"]
    },
    MeetingLink: {
        type: String,
        required: [true, "Please Provide the Valid Meeting Link "]
    }

});

const Meetings = mongoose.model("Meetings", MeetingSchema);
module.exports = Meetings;