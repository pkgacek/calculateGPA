const SUFFIXES = {
    'one': 'st',
    'two': 'nd',
    'few': 'rd',
    'other': 'th'
}

const rule = new Intl.PluralRules('en-US', { type: 'ordinal' });

const getOrdinal = (n) => {
    const number = rule.select(n);
    const suffix = SUFFIXES[number]
    return `${n}${suffix}`;
};