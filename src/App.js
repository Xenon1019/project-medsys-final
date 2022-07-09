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
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;