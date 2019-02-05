export const setName = name => ({
  type: 'ADD_NAME',
  name: name,
});

export const deleteName = () => ({
  type: 'DELETE_NAME',
  name: ''
});
