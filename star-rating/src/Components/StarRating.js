import  { useState, React} from 'react'
import { AiFillStar } from 'react-icons/ai'
import '../App.css'


const StarRating = ({noOfStars = 5}) => {

  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);

  }

  function handleMouseEnter(getCurrentIndex) {

    setHover(getCurrentIndex);

    
  }
  function handleMouseLeave() {
    setHover(rating)


  }



  return (
    <div className='star-rating'> 
{
      [...Array(noOfStars)].map((_, index) => {
        index += 1

        return (
         <AiFillStar 
         key={index}
         className={index <= (hover || rating) ? 'active' : 'inactive'}
         onClick={() => handleClick(index)}
         onMouseEnter={()=> handleMouseEnter(index)}
         onMouseLeave={()=> handleMouseLeave()}
         size={40}
         />
        )
         

      })
        }
    </div>
  )
}

export default StarRating
