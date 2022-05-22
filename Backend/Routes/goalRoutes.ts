export {};
const express = require('express')
const router = express.Router()
const { getGoal,SetGoal,PutGoal,DeleteGoal , getAllGoals , GetSpecific ,SetProgramare} = require ('../controllers/goalController') 
const { protect } = require('../Middleware/authMiddleware')
/*
router.get('/',(req,res)=> {
    res.status(200).json({message:'Get goal'})
}) <-- acestea se afla acum in controller */








/*
router.get('/',getGoal) 
router.post('/',SetGoal)
router.put('/:id',PutGoal)
router.delete('/:id',DeleteGoal)   */
//creanUp
router.route('/').get(protect,getGoal).post(protect,SetGoal)
router.route('/goals').get(getAllGoals)
router.route('/goals/:id').get(GetSpecific).post(protect,SetProgramare)
router.route('/:id').put(protect,PutGoal).delete(protect,DeleteGoal)

module.exports = router ; 