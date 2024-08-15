import React from 'react'

type TypeIconProps = {
  width?: number
  height?: number
  color?: string
}

const Heart = ({
  color = 'fill-primary',
  width = 24,
  height = 20,
  ...props
}: TypeIconProps) => (
  <svg width={width} height={height} viewBox="0 0 24 20" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.60501 1.65849C4.80361 -0.540114 8.36825 -0.540114 10.5669 1.65849L12.2158 3.30744L13.8648 1.65849C16.0634 -0.540114 19.628 -0.540114 21.8266 1.65849C24.0252 3.85709 24.0252 7.42173 21.8266 9.62034L12.2158 19.2311L2.60501 9.62034C0.406404 7.42173 0.406404 3.85709 2.60501 1.65849Z"
      className={color}
    />
  </svg>
)

export default Heart
