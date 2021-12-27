import React from 'react';
import Loading from '../Helper/Loading';
import styles from './UserStatsGraphs.module.css';
import { VictoryPie, VictoryChart, VictoryBar} from 'victory';

const UserStatsGraphs = ({data}) => {
  const [graph, setGraph] = React.useState([]);
  const [total, setTotal] = React.useState(0);

 React.useEffect(() => {
   const graphData = data.map(item => {
     return {
       x: item.title,
       y: Number(item.acessos)
     }
   })
  setTotal(data.map(({acessos}) => Number(acessos)).reduce((a, b) => a + b));
  setGraph(graphData);
 }, [data]);

  return (
    <section className={`${styles.graph} animeLeft`}>
      <div className={styles.total}>
        <p> Acessos: {total} </p>
      </div>

      <div> 
        <VictoryPie data={graph} innerRadius={50} padding={{top: 20, bottom: 20, right: 80, left: 80}}
        style={{
          data: {
            fillOpacity: .9,
            stroke: '#fff',
            strokeWidth: 2
          },
          labels: {
            fontSIze: 14,
            fill: '#333'
          }
        }}/>
      </div>

      <div>
        <VictoryChart>
          <VictoryBar alignment="start" data={data}></VictoryBar>
        </VictoryChart>
      </div>
    </section>
  )
}

export default UserStatsGraphs
