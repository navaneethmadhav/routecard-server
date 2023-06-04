const db = require('./db')

const allProducts = () =>{
    return db.Product.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    products:result
                }
            }
            else{
                return{
                    status:false,
                    statusCode:404,
                    message:'No products found'
                }
            }
        }
    )
}

// add product

const addProduct = (id,product_name,model_no,air_end_sr_no,production,sbm_no,
    casing_set_no,main_casing_no,delivery_casing_no,rotor_pair_no,gear_no,
    pinion_no,delivery_clearance_male,delivery_clearance_female,end_cover_size,
    pneumatic_testing_date,pneumatic_testing_by,pneumatic_testing_remark,assembly_by) =>{
        return db.Product.findOne({id}).then(
            (result)=>{
                if(result){
                    return{
                        status:false,
                        statusCode:404,
                        message:"Product Id already exists"
                    }
                }
                else{
                    const newProduct = new db.Product({
                        id,
                        product_name,
                        model_no,
                        air_end_sr_no,
                        production,
                        sbm_no,
                        casing_set_no,
                        main_casing_no,
                        delivery_casing_no,
                        rotor_pair_no,
                        gear_no,
                        pinion_no,
                        delivery_clearance_male,
                        delivery_clearance_female,
                        end_cover_size,
                        pneumatic_testing_date,
                        pneumatic_testing_by,
                        pneumatic_testing_remark,
                        assembly_by
                    })
                    newProduct.save()
                    return{
                        status:true,
                        statusCode:200,
                        message:"New Employee added successfully"
                    }
                }
            }
        )
    }

// delete product
const removeProduct = (id) =>{
    return db.Product.deleteOne({id}).then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    message:"Data removed Successfully"
                }
            }
            else{
                return{
                    status:false,
                    statusCode:404,
                    message:"No data found"
                }
            }
        }
    )
}

module.exports = {
    allProducts,
    addProduct,
    removeProduct
}