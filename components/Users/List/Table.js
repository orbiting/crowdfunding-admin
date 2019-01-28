import React from 'react'
import { Label } from '@project-r/styleguide'
import { Link } from '../../../server/routes'

import { displayDate } from '../../Display/utils'

import {
  tableStyles as styles,
  createSortHandler,
  createSortIndicator
} from '../../Tables/utils'

export default ({ items, sort, onSort, ...props }) => {
  const sortHandler = createSortHandler(sort || {}, onSort)
  const indicator = createSortIndicator(sort || {})
  return (
    <table {...props} {...styles.table}>
      <colgroup>
        <col />
        <col style={{ width: '20%' }} />
        <col style={{ width: '20%' }} />
        <col style={{ maxWidth: '90px' }} />
        <col style={{ maxWidth: '100px' }} />
      </colgroup>
      <thead>
        <tr {...styles.headRow}>
          <th
            {...styles.interactive}
            {...styles.left}
            onClick={sortHandler('email')}
          >
            <Label>Email {indicator('email')}</Label>
          </th>
          <th
            {...styles.interactive}
            {...styles.left}
            onClick={sortHandler('firstName')}
          >
            <Label>First name{indicator('firstName')}</Label>
          </th>
          <th
            {...styles.interactive}
            {...styles.left}
            onClick={sortHandler('lastName')}
          >
            <Label>Last name{indicator('lastName')}</Label>
          </th>
          <th>
            <Label>Active Membership</Label>
          </th>
          <th
            {...styles.interactive}
            onClick={sortHandler('createdAt')}
          >
            <Label>Created{indicator('createdAt')}</Label>
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((user, index) => (
          <tr key={`user-${index}`} {...styles.row}>
            <td>
              <Link
                route='user'
                params={{ userId: user.id }}
              >
                <a {...styles.link}>
                  {user.email}
                </a>
              </Link>
            </td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td {...styles.center}>{user.activeMembership && user.activeMembership.type.name}</td>
            <td {...styles.center}>{displayDate(user.createdAt)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}