export {};

// auto try catch
const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel')
const User = require('../models/userModel')


interface Response {
    status: (arg0: number) => { (): any; new(): any; json: { (arg0: any): void; new(): any } }
}
interface Request {
    user: { id: number },
    body: { title: string; 
        titlu: string;
         image: string; 
         text: string;
          descriere: string
          programare: string ,
           id: string ,
            _id:string
        }
    params: { id: number; }
}


//@route GET /api/goals
//@acces Private
const getGoal= asyncHandler(async (req: Request ,res: Response) => {
    const goals = await Goal.find({user: req.user.id})
    res.status(200).json(goals)
    //res.status(200).json({message:'Get Goals'})
})


//@route GET /api/goals/goals
//@acces Public

const getAllGoals = asyncHandler(async (req: Request ,res: Response) => {
    const goals = await Goal.find({title:req.body.title})
    res.status(200).json(goals)
    
})

//@route GET /api/goals/goals/:id
//@acces Public
const GetSpecific = asyncHandler(async (req: Request, res: Response) => {
    const goals = await Goal.findById( req.params.id );
    res.status(200).json(goals);
    //res.status(200).json({message:'Get Goals'})
});

//@route SET /api/goals
//@acces Private
const SetGoal =  asyncHandler( async  (req: Request, res: Response) => {
    if (!req.body.titlu){
    res.status(400)
    throw new Error('Lipsa titlu')
    
};
if (!req.body.image){
    res.status(400)
    throw new Error('Lipsa imagine') };

//upload.single("articleImage");

const goal = await Goal.create({ 
    user: req.user.id,
    titlu: req.body.titlu,
    text:req.body.text,
    descriere:req.body.descriere,
    image:JSON.stringify(req.body.image),
    
})
res.status(200).json(goal)
})


//@route /api/goals/goals/:id
//@acces Private
const SetProgramare = asyncHandler(async (req: Request, res: Response) => {
    // const goal = await Goal.findById(req.params.id)
     const goal = await Goal.findById(req.params.id)
if (!goal){
       res.status(400)
      throw new Error('Nu a fost gasit documentul')}
    
   if (!req.body.programare){
         res.status(400)
        throw new Error('Lipsa date programare') };

         if (!req.user){
           res.status(400)
            throw new Error('Trebuie sa fi logat') };

   
    //  await goal.create({ 
    //     programare: req.body.programare,
    // })
    
  //await   Goal.findById(req.params.id).create({ programare: req.body.programare})
  const programareGoal = 
await Goal.findByIdAndUpdate(req.params.id ,  {
    programare:req.body.programare,
    programareBy:req.body._id
 }
)
     res.status(200).json(programareGoal)
});



//@route PUT /api/goals
//@acces Private
const PutGoal=asyncHandler( async (req: Request,res: Response)=> {

    const goal = await Goal.findById(req.params.id)

   if(!goal){
       res.status(400)
       throw new Error('Locuinta nu a fost gasita')
   }


   //check for user
   if(!req.user) {
       res.status(401)
       throw new Error('Userul nu a fost gasit')
   }
   //must match logged user with goal user
   if (goal.user.toString() !== req.user.id){
 res.status(401)
 throw new Error('User neautorizat')
   }
   
   const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
       new:true,
   })

    res.status(200).json(updatedGoal)
})


//@route DELETE /api/goals
//@acces Private

const DeleteGoal =asyncHandler( async (req: Request ,res: Response) =>{

    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('Goal not Found')
    }
    //check for user
    if(!req.user) {
        res.status(401)
        throw new Error('User not found')
    }
    //must match logged user with goal user
    if (goal.user.toString() !== req.user.id){
    res.status(401)
    throw new Error('User not authorized')
    }   


     await goal.remove()
 
     res.status(200).json({id:req.params.id})
})

module.exports = {
    getGoal,
    getAllGoals,
    SetGoal,
    PutGoal,
    DeleteGoal,
    GetSpecific,
    SetProgramare

}