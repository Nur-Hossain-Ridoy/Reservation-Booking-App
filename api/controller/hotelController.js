const Hotel = require('../models/Hotel')

exports.hotel =  async (req, res, next) => {
    try {
        const newHotel = await Hotel.create(req.body)

        res.status(200).json({ success: true, newHotel})
        
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.updateHotel =  async (req, res, next) => {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.hotelId, 
            {$set: req.body}, 
            { new: true })

        res.status(200).json({ success: true, updatedHotel})
        
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.deleteHotel =  async (req, res, next) => {
    try {
        await Hotel.findByIdAndDelete(req.params.hotelId)

        res.status(200).json({ success: true, msg: 'Hotel is deleted' })
        
    } catch (err) {
        res.status(500).json(err)
    }
}

// get one
exports.getOneHotel =  async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.hotelId)

        res.status(200).json({ success: true, hotel })
        
    } catch (err) {
        res.status(500).json(err)
    }
}

// get all hotel
exports.allHotel =  async (req, res, next) => {
    try {
        const hotels = await Hotel.findById('sdlkflkasd')
        res.status(200).json({ success: true, hotels })
        
    } catch (err) {
        next(err)
    }
}