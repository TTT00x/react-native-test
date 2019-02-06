export const switchMode = current => ({
  type: 'SWITCH_MODE',
  mode: current === 0 ? 1 : 0,
});
