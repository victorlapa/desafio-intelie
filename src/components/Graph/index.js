// import { useState } from 'react';
import { LineChart } from 'react-chartkick';

import 'chartkick/chart.js';

export default function Graph() {
// const [graphData] = useState([{ name: 'a', start: 1, end: 2 }
// , { name: 'b', start: 1.2, end: 1.5 }]);

  const graphData = { gpro: 2, glorious: 3 };

  return (
    <LineChart data={graphData} precision={2} empty="No Data" />
  );
}
