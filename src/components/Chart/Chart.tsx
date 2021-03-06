import React, { Suspense } from "react"
import { colours } from "./colours"
import "./styles.css"
import { useIntradayPrices, usePreviousClose } from "./hooks/usePrices"
import { CurrentPriceChart } from "./components/CurrentPriceChart"
import { LoadingPlaceholder } from "./Placeholders/LoadingPlaceholder"
import { useSymbol } from "../../contexts/SymbolContext"
import { ErrorPlaceholder } from "./Placeholders/ErrorPlaceholder"
import { StaticYAxis } from "./components/CustomisedYAxis"
import { useDrag } from "./hooks/useDrag"
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary"

const style: React.CSSProperties = {
	fontFamily: "Roboto",
	userSelect: "none",
	fill: colours.keys,
}

const axisProps = {
	tickSize: 12,
	tickMargin: 10,
	tickLine: { stroke: colours.coreSecondary3 },
	stroke: colours.coreSecondary3,
	strokeWidth: 0.5,
	style: style,
}

const Chart = () => {
	const [chartRef, startDrag] = useDrag()

	return (
		<div
			className="chart__container"
			ref={chartRef}
			onMouseDown={startDrag}
			data-testid="intraday-chart"
		>
			<div className={`chart__inner`}>
				<ErrorBoundary fallback={<ErrorPlaceholder />}>
					<Suspense fallback={<LoadingPlaceholder />}>
						<ChartContent />
					</Suspense>
				</ErrorBoundary>
			</div>
		</div>
	)
}

const ChartContent = () => {
	const { symbol } = useSymbol()
	const [intradayPrices, minMax] = useIntradayPrices(symbol)
	const previousClose = usePreviousClose(symbol)
	const interval = 3

	if (intradayPrices && minMax) {
		return (
			<>
				<StaticYAxis
					axisProps={axisProps}
					data={intradayPrices}
					max={minMax.max}
					min={minMax.min}
				/>
				<CurrentPriceChart
					axisProps={axisProps}
					currentDayData={intradayPrices}
					previousClose={previousClose ? previousClose : undefined}
					interval={interval}
					max={minMax.max}
					min={minMax.min}
				/>
			</>
		)
	}

	return null
}

export default Chart
