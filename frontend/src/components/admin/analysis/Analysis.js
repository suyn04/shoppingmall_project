import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import 'chart.js/auto';

const Analysis = () => {
  const [timePeriod, setTimePeriod] = useState('day')
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [{
      label: 'Orders',
      data: [],
      backgroundColor: 'rgba(28, 28, 28, 0.2)',
      borderColor: 'rgba(0, 0, 0, 1)',
      borderWidth: 1
    }]
  })

  useEffect(() => {
    fetchData(timePeriod)
    console.log("최종 chartData:", chartData)
  }, [timePeriod])

  const formatDate = (dateString, period) => {
    if(!dateString) return ''

    const date = new Date(dateString)

    if(period === 'day'){
      return date.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    }else if(period === 'month'){
      return date.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
      })
    }else if(period === 'year'){
      return date.getFullYear() + '년'
    }
    return ''
  }

  const fetchData = async (period) => {
    try{
      const response = await axios.get(`http://localhost:5001/analysis/${period}`)
      const data = response.data
      console.log('data:',data)
      const dateData = data.map(item => item.order_date)
      console.log('dateData:',dateData)

      let labels = []
      let amount = []

      if(period === 'day'){
        labels = data.map(item => formatDate(item.order_date, period))
        amount = data.map(item => item.total_amount)
      }else if (period === 'month'){
        labels = data.map(item => formatDate(item.order_date, period))
        amount = data.map(item => item.total_amount)
      }else if (period === 'year'){
        labels = data.map(item => formatDate(item.order_date, period))
        amount = data.map(item => item.total_amount)
      }

      // console.log('labels,counts:',labels,counts)

      setChartData({
        labels,
        datasets: [{
            label: 'Orders',
            data: amount,
            backgroundColor: 'rgba(28, 28, 28, 0.2)',
            borderColor: 'rgba(0, 0, 0, 1)',
            borderWidth: 1
        }]
      })

      console.log("chartData: ",chartData)
    }catch (err){
      console.error('데이터 가져오기 실패: ', err)
    }
  }

  return (
    <div>
      <h2>판매량 분석</h2>
      <select onChange={(e) => setTimePeriod(e.target.value)} value={timePeriod}>
        <option value="day">일별</option>
        <option value="month">월별</option>
        <option value="year">연별</option>
      </select>
      <Bar 
        data={chartData} 
        options={{ 
          scales: { 
            y: { beginAtZero: true }
          },
        }} 
      />
    </div>
  )
}

export default Analysis
