const verificaDia = () => {
  const dia = new Date().getDay();
  return dia === 1 ? true : false;
};

module.exports = verificaDia;
