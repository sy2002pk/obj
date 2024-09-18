import './religion.css'
import { NavLink } from "react-router-dom";
import ReligionHinduismPage from '../../components/religion/hinduism/containerReligion.jsx';
import ReligionBuddhismPage from '../../components/religion/buddhism/containerReligion.jsx';
import ReligionNaturaPage from '../../components/religion/Natural/natural.jsx';
import Religion from '../../components/layout/religion.jsx';
import ImageCarousel from '../../components/religion/Christianity/Christianity.jsx';

const ReligionPage = () => {
    return (
        <>
        <Religion/>
    {/* <ReligionBuddhismPage/> */}
    {/* <ReligionHinduismPage/> */}
    {/* <ReligionNaturaPage/> */}
        <ImageCarousel/>
        </>
)
}

export default ReligionPage;