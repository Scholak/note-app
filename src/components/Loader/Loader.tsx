import React from 'react'

interface Props {
  width?: number | null
  height?: number | null
  className?: string | null
}

const Loader = ({ width, height, className }: Props) => {
  return (
		<div
			className={`bg-slate-400 rounded-md ${className ? className : ''}`}
			style={{
				width: width ? `${width}px` : '100% !important',
				height: height ? `${height}px` : 'auto',
			}}
			data-testid='loader'
		></div>
	)
}

export default Loader
