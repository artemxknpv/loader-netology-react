import React from 'react'
import ClipLoader from 'react-spinners/ClipLoader'

const css = `
  display: block;
  margin: 0 auto;
`

export const Loader = ({ loading }) => (
  <ClipLoader css={css} loading={loading} size={150} />
)
