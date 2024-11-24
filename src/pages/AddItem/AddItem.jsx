import { Link } from 'react-router-dom';
import backArrow from '../../assets/back_arrow.png'
import './AddItem.scss';

function AddItem() {
  return (
    <main>
      <div className="add__header-container">
        <Link to="/">
        <img src={backArrow} alt="back-arrow" className="back-arrow" />
        </Link>
        <h1 className="add__title">
          add a new gift
        </h1>
      </div>

      <div className="upload__container">



        <div className="upload__image-container">

        </div>


        <div className="upload__details-container">

        </div>



      </div>
      
    </main>
  )
}

export default AddItem;
