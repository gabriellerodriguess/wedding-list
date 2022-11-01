import * as React from "react"

export default function SvgComponent(props) {
  return (
    <svg
      width={'100%'}
      height={'auto'}
      viewBox="0 0 375 116"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 95.2l12.5-9.053C25 76.925 50 59.075 75 56.652 100 54.4 125 68 150 72.547c25 4.378 50 .128 75 9.053s50 31.875 75 34 50-15.725 62.5-24.947L375 81.6V0H0v95.2z"
        fill="#E5E7DD"
      />
    </svg>
  )
}

