import React from 'react';
import { Card } from "@/components/Card";
import { Box } from '@/components/Box';

export default function Home() {


  return (
    <div className='flex justify-center items-center'>
      <Box title="Wine List">
        <Card content='Merlot'></Card>
        <Card content='Sauvignon Blanc'></Card>
        <Card content='Malbec'></Card>
        <Card content='Pinot Grigio'></Card>
      </Box>
      <Box title="Cocktail List">
        <Card content='Pina Colada'></Card>
        <Card content='Mojito'></Card>
        <Card content='Old Fashioned'></Card>
        <Card content='Negroni'></Card>
      </Box>
      <Box title="Food List">
        <Card content='Lasagna'></Card>
        <Card content='Beef Burger'></Card>
        <Card content='Chicken Katsu Curry'></Card>
        <Card content='Grilled Aubergine'></Card>
      </Box>
    </div>
  );
}
