import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import { useMediaPredicate } from "react-media-hook";

const HotelCard = () => {
    const biggerThan400 = useMediaPredicate("(min-width: 400px)");
    
    return <div>
        {biggerThan400 && <button>SomeButton</button>}
    </div>
};

// function HotelCard() {
//     return (
//         <Card>
//             <CardMedia>
//                 <CardContent>
//                     <Typography>Nombre del Hotel</Typography>
//                 </CardContent>
//             </CardMedia>
//         </Card>
//     )
// }

export default HotelCard;