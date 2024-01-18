import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const CharacterCard = ({character}) => {

  return (
    <div className='p-10' >
        <Link to={`/character/${Number(character.id)}`} > 
        <Card className='cursor-pointer' sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={character.image}
      />
      <CardContent className='h-36'>
        <Typography className='text-center' gutterBottom variant="h5" component="div">
          {character.name}
        </Typography>
      </CardContent>

    </Card>
    </Link>
        </div>
  )
}

export default CharacterCard