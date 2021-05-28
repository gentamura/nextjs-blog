import React, { FC } from 'react';
import { parseISO, format } from 'date-fns'

type Props = {
  dateString: string;
};

const Date: FC<Props> = ({ dateString }) => {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'yyyy-MM-dd HH:mm')}</time>
}

export default Date;
