const Meetings = require('../models/meetings');
const User = require('../models/user');
exports.meetingsList = async (req, res, next) => {

    const { Hostname, Book, Genre, Date, MeetingLink } = req.body;
    try {
        const meetings = await Meetings.create({ Hostname, Book, Genre, Date, MeetingLink });
        res.status(201).json({
            success: true,
            response: "gotcha"
        })
        return;
    }
    catch (error) {
        console.log(error);
        // res.status(500).json({
        //     success:fail,
        //     error:error.message
        // })
        return;
    }
    res.send("Meetings list will appear here");
    return;
}

// exports.meetingsList = async(req,res) =>
// {
//     await Meetings.findOne( {Hostname:User.username} );
//     // res.status(201).json({
//     //     response:"got it"
//     // }) 
//     return;
// }

// exports.meetingsList = async (req, res) => {
//     await Meetings.find({ _id: req.params.id }, function (err, data) {
//         if (err) {
//             res.json(err);
//         }
//         else {
//             res.json(data[0]);
//         }
//     })
// }


exports.meetingGet = async (req, res) => {
    await Meetings.find((error, data) => {
        if (error) {
            return next(error);
        }
        else {
            console.log(req.session);
            console.log(req.session.user);
            res.json(data);
        }
    })
}

// exports.meetById = aync(req, res) => {
//     await Meetings.findById(req.param.id)
//         .then(res => {
//             return res.status(200).json(res);
//         })
//         .catch(err => next(err));
// }