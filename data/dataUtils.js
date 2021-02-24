// const getTypeId = ({ typeId }, types) => types.find(type => typeId === type.type).id;

// for some reason when refactoring - the dataUtils test fails and subsequently causes 4 of the app tests to fail as well. When using the full function below, all tests pass. 

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
