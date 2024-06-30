const { PrismaClient } =require('@prisma/client');
const prisma = new PrismaClient()

const addBreakfast=async(req,res)=>{
    try {
        const {proteins,fats,carbs,rdc,id,date}=req.body;
        const data=await prisma.breakfast.create({
            data:{
                proteins,
                fats,
                carbs,
                rdc,
                userId:id,
                date:new Date(date)
            }
        })
        return res.status(200).json({success:true,message:"Added data successfully",data})
    } catch (error) {
        console.log(error);
        return res.status(500).json({success:false,message:"Internal Server Error"});             
    }
}

module.exports=addBreakfast