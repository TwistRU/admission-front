export default {
    options: {
        width: 146,
        margin: { top: 15, right: 5, bottom: 15, left: 5 },
        xScale: { type: "point" },
        enablePoints: false,
        yScale: {
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: true,
            reverse: false,
        },
        axisTop: null,
        axisRight: null,
        axisLeft: null,
        axisBottom: null,
        colors: ["#1F8EFA"],
        enableGridX: false,
        enableGridY: false,
        pointSize: 5,
        pointBorderWidth: 2,
        pointLabel: "y",
        pointLabelYOffset: -12,
        areaOpacity: 0.1,
        enableCrosshair: false,
        useMesh: true,
        legends: [],
    },
};