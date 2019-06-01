import util from '../../helpers/util';

import birfdayData from '../../helpers/data/birfdayData';

const domStringBuilder = (uid) => {
  birfdayData.getBirfdayByUid(uid).then((birthday) => {
    let domString = '';

    domString = `<h1>${birthday.date}</h1>`;
    domString += `<img src="${birthday.imageUrl}" alt="birthday location" />`;
    domString += `<h3>${birthday.location} @ ${birthday.time}</h3>`;
    util.printToDom('event', domString);
  })
    .catch(err => console.error('could not get birfday', err));
};

export default { domStringBuilder };
