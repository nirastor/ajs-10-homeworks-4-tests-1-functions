import './css/style.css';

import './js/app';

function stringifyHealth(person) {
  let healthString = '';
  if (person.health > 50) {
    healthString = 'healthy';
  } else if (person.health >= 15) {
    healthString = 'wounded';
  } else {
    healthString = 'critical';
  }

  return healthString;
}

stringifyHealth();
