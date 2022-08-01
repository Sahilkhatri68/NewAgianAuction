import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import pics from "../img/bag.jpg";
import "./Page.css"
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";

export default function Page() {

    const { id } = useParams();
    const [product, setProduct] = useState([]);

    async function GetData() {
        const res = await axios.get(`/${id}`)
        console.log(res.data)
        setProduct(res.data);
        console.log(res.data)
    }



    return (
        <div className='mainContt'>
            <div className='insideMainCont'>
                <Card className="cardsxdiv">
                    <CardMedia
                        component="img"
                        height="200"
                        image={pics}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles
                        </Typography>
                    </CardContent>
                    <CardActions style={{ alignItems: "center", display: "flex", justifyContent: "space-between" }}>
                        <Button size="small" variant='none' style={{ width: 10 }}>  <FavoriteIcon /></Button>

                        <Button size="small" variant='contained' onClick={GetData()}>Bid Now</Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 250 }}>
                    <CardMedia
                        component="img"
                        height="200"
                        image={pics}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles
                        </Typography>
                    </CardContent>
                    <CardActions style={{ alignItems: "center", display: "flex", justifyContent: "space-between" }}>
                        <Button size="small" variant='none' style={{ width: 10 }}>  <FavoriteIcon /></Button>

                        <Button size="small" variant='contained'>Bid Now</Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 250 }}>
                    <CardMedia
                        component="img"
                        height="200"
                        image={pics}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles
                        </Typography>
                    </CardContent>
                    <CardActions style={{ alignItems: "center", display: "flex", justifyContent: "space-between" }}>
                        <Button size="small" variant='none' style={{ width: 10 }}>  <FavoriteIcon /></Button>

                        <Button size="small" variant='contained'>Bid Now</Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 250 }}>
                    <CardMedia
                        component="img"
                        height="200"
                        image={pics}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles
                        </Typography>
                    </CardContent>
                    <CardActions style={{ alignItems: "center", display: "flex", justifyContent: "space-between" }}>
                        <Button size="small" variant='none' style={{ width: 10 }}>  <FavoriteIcon /></Button>

                        <Button size="small" variant='contained'>Bid Now</Button>
                    </CardActions>
                </Card>

                <Card sx={{ maxWidth: 250 }}>
                    <CardMedia
                        component="img"
                        height="200"
                        image={pics}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles
                        </Typography>
                    </CardContent>
                    <CardActions style={{ alignItems: "center", display: "flex", justifyContent: "space-between" }}>
                        <Button size="small" variant='none' style={{ width: 10 }}>  <FavoriteIcon /></Button>

                        <Button size="small" variant='contained'>Bid Now</Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
}
