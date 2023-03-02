import Abdullah from './images/86263515.png';
import Huseyin from  './images/manzara1.jpg';
import Mehmet from  './images/manzara2.jpg';
import './member.css'

const membersMap = {
    Abdullah,
    Huseyin,
    Mehmet
}

function Member({membersName})
{
   
    return (
       
        <div className='image'>
               <img src={membersMap[membersName]} width="200" height="200" alt='abd '></img>
             
        </div>
    );
}

//dışa aktarma
export default Member;