import React from "react"
import { useSymbol } from "../../contexts/SymbolContext"
import useLivePrice from "./useLivePrice"
import "./styles.css"
import downArrow from "../../assets/redarrow.svg"
import normalArrow from "../../assets/normal.svg"

const LivePrice = ({ searchFocused }) => {
	const { symbol } = useSymbol()
	const price = useLivePrice(symbol)

	const livePriceRenderer = () => {
		if (price) {
			if (price.length) {
				return (
					<div
						className={`price__display ${
							searchFocused ? "price__display--hidden" : null
						}`}
					>
						<span className="price">{`$${price?.[0].latestPrice.toFixed(
							2
						)}`}</span>
						<img
							className="arrow"
							src={
								price?.[0].change > 0 ? normalArrow : downArrow
							}
							alt="down arrow"
						/>
						<span
							className={
								price?.[0].change > 0
									? "change positive"
									: "change negative"
							}
						>
							{`${
								price?.[0].change
							} | ${price?.[0].changePercent.toFixed(2)}%`}
						</span>
					</div>
				)
			}
			return "ERROR LOADING LIVE PRICE"
		}
		return "LOADING"
	}

	return livePriceRenderer()
}

export default LivePrice
