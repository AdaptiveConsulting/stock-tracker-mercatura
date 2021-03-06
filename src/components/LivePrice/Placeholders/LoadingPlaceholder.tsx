import React from "react"
import { usePlaceholderAnimation } from "../../../hooks/usePlaceholderAnimation"

function LoadingPlaceholder() {
	const opacity = usePlaceholderAnimation()

	return (
		<div
			className="live-price__placeholder"
			style={{ opacity: opacity }}
			data-testid="live-price-loading"
		>
			<div className="live-price__placeholder__price" />
			<div className="live-price__placeholder__arrow" />
			<div className="live-price__placeholder__change" />
		</div>
	)
}

export default LoadingPlaceholder
