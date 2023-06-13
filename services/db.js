const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/RouteCard')

const Product = mongoose.model('Product',
{
    id:String,
    product_name:String,
    model_no:String,
    air_end_sr_no:String,
    production:String,
    sbm_no:String,
    casing_set_no:Object,
    main_casing_no:Object,
    delivery_casing_no:Object,
    rotor_pair_no:Object,
    gear_no:Object,
    pinion_no:Object,
    delivery_clearance_male:String,
    delivery_clearance_female:String,
    end_cover_size:String,
    pneumatic_testing_date:Object,
    pneumatic_testing_by:String,
    pneumatic_testing_remark:String,
    assembly_by:String,
    submit_date:String
}
)

module.exports={
    Product
}