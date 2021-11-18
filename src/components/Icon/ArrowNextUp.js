import * as React from 'react'

function SvgArrowNextUp({ size, color }) {
  return (
    <svg width={size} height={size} fill='none' viewBox='0 0 48 48'>
      <path
        d='M38 35.184H28a10.51 10.51 0 01-10.5-10.5v-8.38l3.44 3.44a1.5 1.5 0 002.448-.486 1.49 1.49 0 00-.328-1.634l-6-6a1.511 1.511 0 00-.49-.33 1.43 1.43 0 00-1.1 0 1.51 1.51 0 00-.49.33l-6 6a1.5 1.5 0 002.12 2.12l3.44-3.44v8.38A13.52 13.52 0 0028 38.184h10a1.5 1.5 0 100-3z'
        fill={color}
      />
    </svg>
  )
}

export default SvgArrowNextUp
