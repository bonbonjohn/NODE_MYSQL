module.export = validateRequest;

function validateRequest(req, next, schema){
    const option = {
        abortEarly: false,
        allowUnknown: true,
        stripUnknown: true,
    };
    const { error, value} = schema.validate(req.body, options);
    if(error) {
        next(`Validation error: ${error.details.map(x => x.massage).json(',')}`);
    } else {
        req.body = value;
        next();
    }
}