import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Text } from 'recharts';



const COLORS = ['#0088FE', '#E8E8E8'];

const ChartPie = ({text,percent,color}) => {
  const data1 = [
    { name: 'Progress', value: percent }, // Giá trị phần trăm của đường tròn
    { name: 'Remaining', value: 100 - percent }, // Giá trị phần trăm còn lại
  ];
  return (
    <ResponsiveContainer percent={percent} width={200} height={220}>
      <PieChart >
        <Pie
          data={
            data1
          }
          cx="50%"
          cy="50%"
          innerRadius={45}
          outerRadius={55}
          startAngle={90}
          endAngle={-270}
          dataKey="value"
          paddingAngle={0}
          isAnimationActive={false}
        >
           (
            <Cell key={`cell-${0}`} fill={color} />
            <Cell key={`cell-${1}`} fill={COLORS[1]} />
            {/* <Cell key={`cell-${1}`} fill={COLORS[0]} /> */}


          )
        </Pie>
        <text x="50%" y="52%" textAnchor="middle" dominantBaseline="middle" fontSize="20px" fontWeight="bold" >
          <tspan fontSize="26px" fill={color}>{percent}</tspan>  <tspan fontSize="14px" fill="black">%</tspan>
        </text>
        <text x="50%" y="86%" textAnchor="middle" dominantBaseline="middle" fontSize="14px" >{text}</text>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default ChartPie;
