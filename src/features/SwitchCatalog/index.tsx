import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"

const SwitchCatalog = () => {
  const navigate = useNavigate();

  return (
    <Link to='/catalog'><button onClick={() => navigate('/catalog')} className="w-full max-w-[280px] mt-[40px] bg-[#EB2D66] h-[50px] text-[#fff] text-[15px] font-black">Смотреть каталог</button></Link>
  )
}

export default SwitchCatalog