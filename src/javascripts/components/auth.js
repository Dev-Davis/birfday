import util from '../helpers/util';

const domStringBuilder = () => {
  const domString = '<h1>Auth</h1>';
  util.printToDom('auth', domString);
};

export default { domStringBuilder };
