import React from 'react'

type TypeIconProps = {
  color?: string
  size?: number
}

const DarkMode = ({ size = 43, ...props }: TypeIconProps) => (
  <svg width={size} height={size} viewBox="0 0 43 43" fill="none" {...props}>
    <circle cx="21.3062" cy="21.3062" r="21.3062" fill="#F7F7F7" />
    <path
      d="M31.9006 26.0898C30.4417 26.7495 28.8222 27.1168 27.117 27.1168C20.6986 27.1168 15.4954 21.9137 15.4954 15.4952C15.4954 13.7898 15.8628 12.1702 16.5227 10.7112C12.4904 12.5347 9.68466 16.5926 9.68466 21.3057C9.68466 27.7242 14.8878 32.9273 21.3062 32.9273C26.0192 32.9273 30.077 30.1219 31.9006 26.0898Z"
      fill="#373737"
    />
  </svg>
)

export default DarkMode
