export const loadState = () => {
  try {
    const serialisedState = localStorage.getItem('state');
    if (serialisedState === null) {
      return undefined;
    }
    return JSON.parse(serialisedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem('state', serialisedState);
  } catch (err) {
    throw new Error('Could not serialise or set the item in localstorage', err);
  }
};
