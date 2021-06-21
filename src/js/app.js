// eslint-disable-next-line func-names
const healthChecker = function (unit) {
  let status = '';
  if (unit.health > 50) {
    status = 'healthy';
  }
  if (unit.health >= 15 && unit.health <= 50) {
    status = 'wounded';
  }
  if (unit.health < 15) {
    status = 'critical';
  }
  return status;
};
export default healthChecker;
