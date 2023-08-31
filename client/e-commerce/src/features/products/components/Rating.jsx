import Star from "../assets/star.svg";
import HalfStar from "../assets/half-star.svg";
import EmptyStar from "../assets/empty-star.svg";

const Rating = ({score, ratingQuantity}) => {



    const setRating = () => {
        let content = [];
        for (let i = 0, j = score; i < score || j < 5; i++) {
            if(i < score) {
                content.push(<img src={Star} alt="star"/>);
            } else {
                content.push(<img src={EmptyStar} alt="star"/>);
                j++;
            }
        }
        return content;
    }



    return <div className={'flex ml-4'}>
        {setRating()}
        <span className={'pl-1 text-gray-500'}>({ratingQuantity})</span>
    </div>
}

export default Rating;