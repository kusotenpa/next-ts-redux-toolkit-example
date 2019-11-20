import React from 'react'

type Props = {
  lastUpdate: number;
}

export default (props: Props) => {
  const { lastUpdate } = props

  return (
    <div>
      {format(new Date(lastUpdate))}
    </div>
  )
}

const format = (t: Date) => t.toJSON().slice(11, 19)
