export function validateEmail(email) {
  const res =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return res.test(String(email).toLowerCase());
}

const availableRules = {
  required(value) {
    return value ? '' : 'Pole wymagane';
  },
  minLength(value, rule) {
    return value.length >= rule.length ? '' : `Minimum znaków: ${rule.length}`;
  },
  email(value) {
    return validateEmail(value) ? '' : 'Niepoprawny email';
  },
  matchPassword(value, matchValue) {
    if(matchValue) return value === matchValue ? '' : 'Hasła są niezgodne';
    else return '';
  }
};

export function validate(rules = [], value, matchValue) {
  for (let i = 0; i < rules.length; i++) {
    if(rules[i] instanceof Object) {
      const rule = rules[i];
      const errorMessage = availableRules[rule.name](value, rule);
      if (errorMessage) return errorMessage;
    }
    else {
      const errorMessage = availableRules[rules[i]](value, matchValue);
      if (errorMessage) return errorMessage;
    }
  }

  return '';
}