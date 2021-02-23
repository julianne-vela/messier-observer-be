function getTypeId(object, types) {
    const type = types.find(type =>
        object.object_type === type.type
    );

    const typeId = type.id;
    return typeId;

}
// Loop through types array to find the typeObject that matches the supplied item's object_type. 


module.exports = {
    getTypeId,
};
