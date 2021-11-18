import * as React from 'react'

function SvgUser({ size, color }) {
  return (
    <svg width={size} height={size} fill='none' viewBox='0 0 48 48'>
      <path
        d='M38 44.184H10a3.5 3.5 0 01-3.5-3.5v-2a9.51 9.51 0 019.5-9.5h16a9.51 9.51 0 019.5 9.5v2a3.5 3.5 0 01-3.5 3.5zm-22-12a6.51 6.51 0 00-6.5 6.5v2a.51.51 0 00.5.5h28a.51.51 0 00.5-.5v-2a6.51 6.51 0 00-6.5-6.5H16zm8-6a10.5 10.5 0 1110.47-10.5A10.49 10.49 0 0124 26.184zm0-18a7.5 7.5 0 107.47 7.5 7.51 7.51 0 00-7.47-7.5z'
        fill={color}
      />
    </svg>
  )
}

export default SvgUser
