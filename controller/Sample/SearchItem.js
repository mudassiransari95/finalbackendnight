const SampleModel = require("../../models/Sample/SampleSchema")

const searchSample=async(req,res)=>{
    const query=req.query.q
    try {
        const regex=new RegExp(query,'i','g')

        const finddata=await SampleModel.find({
            '$or':[
                {

                    OrderNo:regex
                },
                {

                    Consignee:regex
                }
            ]
        })
        return res.status(200).json({
            data:finddata,
            success:true,
            error:false,
            message:'search data successfully'
        })

    } catch (error) {
         return res.json({
            message:error.message||error,
            success:false,
            error:true
        })
    }
}

module.exports=searchSample