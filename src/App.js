"react-router-dom";
import { TabTitle } from "./components/Utillity";
import Footer from "./components/footer/Footer";
import AboutUs from "./components/aboutUs/AboutUs";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import BlogPost from "./components/ResponsiveBlogTemplate/BlogPost";
import Career from "./components/Career/Career";
import Process from "./components/Process";
import PrivacyPolicy from "./components/PrivacyPolicy";
import RefundPolicy from "./components/RefundPolicy";
import TermsConditions from "./components/TermsConditions";

// ++++++++++++++++++++++++++++++++++ services paages +++++++++++++++++++++++++++++++++++++++++
import Marketing from "./components/Marketing/Marketing";
import Copyright from "./components/pages/copyright/Copyright";
import Producer from "./components/pages/producer/Producer";
import Partner from "./components/Partner";
import Design from "./components/pages/Design/Design";
import FSSAICentral from './components/pages/fassaiCentral/FSSAICentral';
import FSSAIstate from "./components/pages/fssaiState/FSSAIstate";
import FSSAIannual from "./components/pages/fssaiAnnual/FSSAIannual";
import IECRegistration from "./components/pages/IEC Registration/IECRegistration";
import DrugLicense from "./components/pages/drugLicense/DrugLicense";
import Dsc from "./components/pages/dsc/DSC"
import ISOCertification from "./components/pages/isoCertification/ISOCertification";
import NGOAdvocacy from "./components/pages/ngoAdvocacy/NGOAdvocacy";
import PSARA from "./components/pages/PSARA/PSARA";
import Patent from "./components/pages/Patent Registration/Patent";
import Section from "./components/pages/Section Registration/Section";
import NGODarpan from "./components/pages/darpanRegistration/NGODarpan";
import SocietyReg from "./components/pages/societyRegistration/SocietyReg";
import PrivateCompany from "./components/pages/privateCompany/PrivateCompany";
import Trust from "./components/pages/trustRegistration/Trust";
import NidhiCompany from "./components/pages/NidhiCompony/NidhiCompany";
import Business_plan from "./components/pages/Business_plan/Business_plan";
import Ngo_Registration from "./components/pages/Ngo_12A_80G_Reg/Ngo_Registration";
import OnePersonCompany from "./components/pages/One_person_company/OnePersonCompany";
import Sole_Proprietorship from "./components/pages/Sole Proprietorship/Sole_Proprietorship";
// <<<<<<< HEAD
// <<<<<<< HEAD
import Apeda from "./components/pages/Apenda_Licese/Apeda";
import FCRA_Registration from "./components/pages/FCRA Registration/FCRA_Registration";
// =======
import FCRAReg from "./components/pages/fcraRegistration/FCRAReg";
import ApedaLicense from "./components/pages/apeda/ApedaLicense";
import Csr1 from "./components/pages/CSR_1_Reg/CSR_1";
// >>>>>>> 2f2764842cc5595430324c4a810cbd841616bc36
// =======
// import Apeda from "./components/pages/Apenda_Licese/Apeda";
// import FCRA_Registration from "./components/pages/FCRA Registration/FCRA_Registration";
// import ApedaLicense from "./components/pages/apeda/ApedaLicense";
// import Csr1 from "./components/pages/CSR_1_Reg/CSR_1";

// >>>>>>> 0992127f5f73a80a9b079dd4d2dcedeba852b6a8
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  TabTitle("Home - medsysconsultancy.com");
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/aboutus" element={<AboutUs />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/career" element={<Career />}></Route>
          <Route path="/process" element={<Process />}></Route>
          <Route path="/partner" element={<Partner />}></Route>
          <Route path="/privacypolicy" element={<PrivacyPolicy />}></Route>
          <Route path="/refundpolicy" element={<RefundPolicy />}></Route>
          <Route path="/terms&conditions" element={<TermsConditions />}></Route>
          <Route path="/marketingSolutions" element={<Marketing />}></Route>
          <Route path="/blog" element={<BlogPost />}></Route>
          <Route path="/copyright" element={<Copyright />}></Route>
          <Route path="/producer" element={<Producer />}></Route>
          <Route path="/design" element={<Design />}></Route>
          <Route path="/fssai-central" element={ <FSSAICentral /> }></Route>
          <Route path="/fssai-state" element={<FSSAIstate />}></Route>
          <Route path="/fssai-annual" element={<FSSAIannual />}></Route>
          <Route path="/iec-registration" element={<IECRegistration />}></Route>
          <Route path="/drugLicense" element={ <DrugLicense /> }></Route>
          <Route path="/dsc" element={ <Dsc /> }></Route>
          <Route path="/iso-certification" element={ <ISOCertification /> }></Route>
          <Route path="/ngo-advocacy" element={ <NGOAdvocacy />}> </Route>
          <Route path="/psara" element={ <PSARA />}> </Route>
          <Route path="/patent-registration" element={ <Patent />}> </Route>
          <Route path="/section-registration" element={ <Section />}> </Route>
          <Route path="/ngo-darpan" element={ <NGODarpan />}> </Route>
          <Route path="/society-registration" element={ <SocietyReg /> }></Route>
          <Route path="/private-company" element={ <PrivateCompany /> }></Route>
          <Route path="/trust-registration" element={ <Trust /> }></Route>
          <Route path="/nidhi-company-registration" element={ <NidhiCompany /> }></Route>
          <Route path="/business-plan" element={ <Business_plan /> }></Route>
          <Route path="/ngo-registration" element={ <Ngo_Registration /> }></Route>
          <Route path="/one-person-company" element={ <OnePersonCompany /> }></Route>
          <Route path="/sole-proprietorship" element={ <Sole_Proprietorship /> }></Route>
          
{/* <<<<<<< HEAD
<<<<<<< HEAD
          <Route path="/apeda-license" element={ <Apeda /> }></Route>
          <Route path="/fcra-registration" element={ <FCRA_Registration /> }></Route> */}
=======
          <Route path="/fcra-registration" element={ <FCRAReg /> }></Route>
          <Route path="/apeda-registration" element={ <ApedaLicense /> }></Route>
          <Route path="/csr1" element={<Csr1/>}></Route>
{/* >>>>>>> 2f2764842cc5595430324c4a810cbd841616bc36 */}
=======
          <Route path="/apeda-license" element={ <Apeda /> }></Route>
          <Route path="/fcra-registration" element={ <FCRA_Registration /> }></Route>
          <Route path="/apeda-registration" element={ <ApedaLicense /> }></Route>
          <Route path="/csr1" element={<Csr1/>}></Route>
{/* >>>>>>> 0992127f5f73a80a9b079dd4d2dcedeba852b6a8 */}
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;