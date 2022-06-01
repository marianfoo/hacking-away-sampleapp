import Control from "sap/ui/core/Control";
import Chart, { ChartConfiguration, ChartItem, ChartType, ChartTypeRegistry } from "chart.js/auto";
/**
 * @extends Control
 *
 * @author Wouter Lemaire
 * @version ${version}
 *
 * @constructor
 * @public
 * @name hacking.away.samplelib.CustomChart
 */
export default class CustomChart extends Control {
	private chart!: Chart;
	// The following three lines were generated and should remain as-is to make TypeScript aware of the constructor signatures
	constructor(idOrSettings?: string | $CustomChartSettings);
	constructor(id?: string, settings?: $CustomChartSettings);
	constructor(id?: string, settings?: $CustomChartSettings) {
		super(id, settings);
	}
	static readonly metadata = {
		library: "hacking.away.samplelib",
		properties: {
			type: {
				type: "string",
				defaultValue: "line",
			},
			title: "string",
			color: "sap.ui.core.CSSColor",
		},
		aggregations: {
			records: {
				type: "hacking.away.samplelib.CustomChartRecord",
			},
		},
		defaultAggregation: "records",
	};

	private getChartData() {
		const aRecords = this.getRecords();
		return {
			labels: aRecords.map((record) => {
				return record.getLabel();
			}),
			datasets: [
				{
					label: this.getTitle(),
					backgroundColor: this.getColor(),
					borderColor: this.getColor(),
					data: aRecords.map((record) => {
						return record.getValue();
					}),
				},
			],
		};
	}
	public init() {}
	public onAfterRendering() {
		if (!this.chart) {
			this.chart = new Chart(this.getDomRef("canvas") as ChartItem, {
				type: this.getType() as ChartType,
				data: this.getChartData(),
				options: {
					responsive: true,
					animation: false,
				},
			});
		} else {
			this.chart.data = this.getChartData();
			this.chart.update();
		}
	}
}
