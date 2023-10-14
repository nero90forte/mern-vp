import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import "chart.js/auto";
import { json, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { useSelector } from 'react-redux';
import { Navigation } from 'swiper/modules';
import 'swiper/css/bundle';

export default function Monitor() {
    const [log, setLog] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchLog = async () => {
          try {
            setLoading(true);
            const res = await fetch(`/api/user/test`);
            const data = await res.json();
            if (data.success === false) {
              setError(true);
              setLoading(false);
              return;
            }
            setLog(data)
            setLoading(false);
            setError(false);
          } catch (error) {
            setError(true);
            setLoading(false);
          }
        };
        fetchLog();
      });

      const rrRMS = {
        labels: log?.map(item => item.time_created), // X-axis labels
        datasets: [
          {
            label: 'rrRMS per 100 data',
            data: log?.map(item => item.rrRMS), // Y-axis data points
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            fill: false,
          },
        ],
      };
      const HR = {
        labels: log?.map(item => item.time_created), // X-axis labels
        datasets: [
          {
            label: 'HR per 100 data',
            data: log?.map(item => item.HR), // Y-axis data points
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            fill: false,
          },
        ],
      };

  return (
    <main className= 'flexjustify-between items-center max-w-6xl mx-auto p-3'>
     <div style={{ height: '400px' }}>
        <Line data={rrRMS} />
     </div>
     <div style={{ height: '400px' }}>
        <Line data={HR} />
     </div>
    </main>
  )
}
