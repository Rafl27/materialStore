import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { formatCurrency } from '../utilities/formatCurrency';
import './ImgMediaCard.css'

export default function ImgMediaCard(props) {
  let date = new Date()
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={"Item name: " + props.name}
        height="250"
        image={props.imageUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
        <div className='seller-text'>
        <Typography  variant="body2" color="blue">
          Seller: {props.seller}
        </Typography>
        <Typography variant="body2" color="blue">
         Added: {props.date}
        </Typography>
        </div>
        
      </CardContent>
      <CardActions>
        {/* <Button size="small">Add to cart</Button> */}
        <Button className='price-text' size="small">{formatCurrency(props.price)}</Button>
        {/* <Button size="small">More</Button> open a modal with this button */}
      </CardActions>
    </Card>
  );
}