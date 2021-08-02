const Meetings = require('../models/meetings');

exports.meetingsList = async (req,res,next)=>
{

    const {Hostname,Book,Genre,Date,MeetingLink} = req.body;
    try{ 
        const meetings = await Meetings.create({Hostname,Book,Genre,Date,MeetingLink});
        res.status(201).json({
            success:true,
            response:"gotcha"
        })
        return;
    }
    catch(error)
    {
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

exports.meetingGet = async(req,res) =>
{
    await Meetings.find((error,data) =>
    {
        if(error)
        {
            return next(error);
        }
        else
        {
            res.json(data);
        }
    })
}