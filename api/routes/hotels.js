const router = require('express').Router()
const {
    hotel, 
    updateHotel,
    deleteHotel,
    getOneHotel,
    allHotel
} = require('../controller/hotelController')


router.route('/').post(hotel)
router.route('/hotels').get(allHotel)
router.route('/:hotelId').put(updateHotel)
router.route('/:hotelId').delete(deleteHotel)
router.route('/:hotelId').get(getOneHotel)

module.exports = router