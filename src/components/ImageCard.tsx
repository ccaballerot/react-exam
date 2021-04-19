import React from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

export const ImageCard = ( { data }: any ) => {    
    return (        
        <CardActionArea>
            <CardMedia
                component="img"                          
                height="150"                
                image={ data.images[0].url }
            />                           
        </CardActionArea>

    )
}     