// import { useContext } from 'react';
import { LineChart } from 'react-chartkick';

import 'chartkick/chart.js';
import { useEffect, useState } from 'react';
import { useEditor } from '../../hooks/EditorContext';
import { Container } from './styles';

export default function Graph() {
  const { updateGraph, changeJsonError, editorText } = useEditor();
  const [graphData, setGraphData] = useState([
    { name: 'Glorious Model O', data: { '00:00': 1, '00:01': 2 } },
    { name: 'G Pro Wireless', data: { '00:00': 2, '00:01': 1 } },
  ]);

  useEffect(() => {
    try {
      if (updateGraph.length > 1000) {
        changeJsonError('Too much data, text limit is 1000');
        return;
      }

      if (updateGraph) {
        const isJson = JSON.parse(updateGraph);
        setGraphData(isJson);
        changeJsonError('');
      }
    } catch (error) {
      changeJsonError('There was an error in the inserted JSON, try again.');
    }
  }, [updateGraph, editorText]);

  return (
    <Container>
      <LineChart title="Line chart" data={graphData} precision={2} responsive />
    </Container>
  );
}
