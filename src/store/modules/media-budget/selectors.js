import fp from 'lodash/fp'

const subSelector = (subname, defaultValue = null) =>
  fp.compose(
    fp.defaultTo(defaultValue),
    fp.get(subname),
    fp.get('mediaBudget')
  )

export const mediaBudgetSelector = subSelector('mediaBudget')


