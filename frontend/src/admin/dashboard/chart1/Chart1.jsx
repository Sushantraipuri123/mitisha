import { BarChart } from '@mui/x-charts/BarChart';

export default function BasicBars() {
  return (
    <BarChart
      xAxis={[{ scaleType: 'band', data: ['Week 1', 'Week 2', 'Week 3', 'Week 4'] }]}
      series={[
        { data: [4, 3, 5, 7] },
        { data: [1, 6, 3, 5] },
        { data: [2, 5, 6, 4] },
        { data: [7, 5, 6, 8] }
      ]}
      width={500}
      height={300}
    />
  );
}
