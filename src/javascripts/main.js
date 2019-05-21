import '../styles/main.scss';
import auth from './components/auth';
import birf from './components/birfday';

const init = () => {
  auth.domStringBuilder();
  birf.domStringBuilder();
};

init();
