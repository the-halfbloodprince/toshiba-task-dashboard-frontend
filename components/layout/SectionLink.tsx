import React, { FC } from 'react'

export type LinkDetails = {
  name: string;
  iconSrc: string;
  expandable: Boolean;
  danger?: Boolean;
}

type Props = {
  linkDetails: LinkDetails
}

const SectionLink: FC<Props> = () => {
  return (
    <div>Link</div>
  )
}

export default SectionLink