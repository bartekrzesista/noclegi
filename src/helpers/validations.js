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
    return value.length > rule.length ? '' : `Min. znaków: ${rule.length}`;
  },
  email(value) {
    return validateEmail(value) ? '' : 'Niepoprawny email';
  }
};

export function validate(rules = [], value) {
  for (let i = 0; i < rules.length; i++) {
    if(rules[i] instanceof Object) {
      const errorMessage = availableRules[rules[i].name](value, rules[i]);
      if (errorMessage) return errorMessage;
    }
    else {
      const errorMessage = availableRules[rules[i]](value);
      if (errorMessage) return errorMessage;
    }
  } 

  return '';
}