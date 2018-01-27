// This function generates the five statuses from a single CRUD action.
// For instance, you'd probably pass "CREATE", "READ", "UPDATE", or "DELETE"
// as `crudAction`.
const mapConstant = (crudAction) => ({
  [`${crudAction}_RESOURCES_PENDING`]: `${crudAction}_RESOURCES_PENDING`,
  [`${crudAction}_RESOURCES_SUCCEEDED`]: `${crudAction}_RESOURCES_SUCCEEDED`,
  [`${crudAction}_RESOURCES_FAILED`]: `${crudAction}_RESOURCES_FAILED`,
  [`${crudAction}_RESOURCES_IDLE`]: `${crudAction}_RESOURCES_IDLE`,
});

const createTypes = mapConstant('CREATE');
const readTypes = mapConstant('READ');
const updateTypes = mapConstant('UPDATE');
const deleteTypes = mapConstant('DELETE');

export default {
  ...createTypes,
  ...readTypes,
  ...updateTypes,
  ...deleteTypes,
  UPDATE_RESOURCE_LISTS: 'UPDATE_RESOURCE_LISTS'
};
