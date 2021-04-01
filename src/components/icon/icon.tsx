import React from 'react'
import { css } from '@emotion/react'
import classNames from 'classnames'

interface SvgProps
  extends Omit<React.SVGAttributes<HTMLOrSVGElement>, 'style'> {
  name: string
  style?: React.CSSProperties
}

const Icon: React.FC<SvgProps> = (props) => {
  const { name, style, className, ...restProps } = props
  const classes = classNames('g-icon', className)
  return (
    <svg
      {...restProps}
      style={style}
      className={classes}
      css={css`
        width: 1.2em;
        height: 1.2em;
      `}
    >
      <use xlinkHref={`#${name}`} />
    </svg>
  )
}

export default Icon
