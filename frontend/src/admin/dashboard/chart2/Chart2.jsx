import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function Chart2() {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'Primary ' },
            { id: 1, value: 15, label: 'Secondary' },
            { id: 2, value: 20, label: 'Empty' },
          ],
        },
      ]}
      width={400}
      height={200}
    />
  );
}
