import Image from 'next/image'
import React, { FC } from 'react'

type LogoVariant = 'small' | 'large'

type Props = {
  variant: LogoVariant;
}

const getLogoImgSrc = (variant: LogoVariant) => {
  const paths: Record<LogoVariant, string> = {
    'small': '/logos/logomark.svg',
    'large': '/logos/logo_expanded.svg',
  }

  return paths[variant]
}

const Logo: FC<Props> = ({ variant }) => {
  return (
    <Image 
      src={getLogoImgSrc(variant)} 
      alt='Logo'
      width={variant === 'large' ? 130 : 25} 
      height={variant === 'large' ? 100 : 25} 
    />
  )
}

export default Logo