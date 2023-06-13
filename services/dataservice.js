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
    pneumatic_testing_date,pneumatic_testing_by,pneumatic_testing_remark,assembly_by,submit_date) =>{
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
                        assembly_by,
                        submit_date
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

// get a particular product details

const getProductDetail = (id) =>{
    return db.Product.findOne({id}).then(
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
                    message:"No data found"
                }
            }
        }
    )
}

// update products details

const updateProducts = (id,product_name,model_no,air_end_sr_no,production,sbm_no,
    casing_set_no,main_casing_no,delivery_casing_no,rotor_pair_no,gear_no,
    pinion_no,delivery_clearance_male,delivery_clearance_female,end_cover_size,
    pneumatic_testing_date,pneumatic_testing_by,pneumatic_testing_remark,assembly_by,submit_date) =>{
        return db.Product.findOne({id}).then(
            (result)=>{
                if(result){
                    result.id = id
                    result.product_name = product_name
                    result.model_no = model_no
                    result.air_end_sr_no = air_end_sr_no
                    result.production = production
                    result.sbm_no = sbm_no
                    result.casing_set_no = casing_set_no
                    result.main_casing_no = main_casing_no
                    result.delivery_casing_no = delivery_casing_no
                    result.rotor_pair_no = rotor_pair_no
                    result.gear_no = gear_no
                    result.pinion_no = pinion_no
                    result.delivery_clearance_male = delivery_clearance_male
                    result.delivery_clearance_female = delivery_clearance_female
                    result.end_cover_size = end_cover_size
                    result.pneumatic_testing_date = pneumatic_testing_date
                    result.pneumatic_testing_by = pneumatic_testing_by
                    result.pneumatic_testing_remark = pneumatic_testing_remark
                    result.assembly_by = assembly_by
                    result.submit_date = submit_date

                    result.save()
                    return{
                        status:true,
                        statusCode:200,
                        message:"Product data updated successfully"
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
    removeProduct,
    getProductDetail,
    updateProducts
}