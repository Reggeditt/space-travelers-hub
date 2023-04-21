import useEffect from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDragon } from '../redux/dragon/dragonSlice';


const DragonList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchDragon())
    }, []);
    const dragon = useSelector((state) => state.dragon).dragon;
    console.log(dragon);

};
// dispatch(fetchDragon());
export default DragonList;