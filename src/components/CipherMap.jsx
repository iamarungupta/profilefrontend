import ReactDOM from 'react-dom';
import HeatMap from '@uiw/react-heat-map';
import Tooltip from '@uiw/react-tooltip';
import './CipherMap.css'
const value = [
  { date: '2016/01/11', count: 2 },
  { date: '2016/01/12', count: 20 },
  { date: '2016/01/13', count: 10 },
  ...[...Array(17)].map((_, idx) => ({ date: `2016/02/${idx + 10}`, count: idx, content: '' })),
  { date: '2016/04/11', count: 2 },
  { date: '2016/05/01', count: 5 },
  { date: '2016/05/02', count: 5 },
  { date: '2016/05/04', count: 11 },
];

const CipherMap = () => {
  return (

    <div  className="mx-auto w-11/12 my-2">
      <HeatMap value={value} 
     width={'80vw'}
      startDate={new Date('2016/01/01')}
      rectRender={(props, data) => {
        return (
          <Tooltip key={props.key} placement="top" content={`count: ${data.count || 0}`}>
            <rect {...props} />
          </Tooltip>
        );
      }}
      />
    </div>
  )
};

export default CipherMap;