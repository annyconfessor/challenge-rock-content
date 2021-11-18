import * as React from 'react'

function SvgArrowBackDown({ size, color }) {
  return (
    <svg width={size} height={size} fill='none' viewBox='0 0 48 48'>
      <path
        d='M10 14.184h10a10.51 10.51 0 0110.5 10.5v8.38l-3.44-3.44a1.5 1.5 0 00-2.448.485 1.49 1.49 0 00.328 1.635l6 6c.14.14.306.253.49.33a1.43 1.43 0 001.1 0c.184-.077.35-.19.49-.33l6-6a1.5 1.5 0 00-2.12-2.12l-3.4 3.44v-8.38a13.52 13.52 0 00-13.5-13.5H10a1.5 1.5 0 000 3z'
        fill={color}
      />
    </svg>
  )
}

export default SvgArrowBackDown
