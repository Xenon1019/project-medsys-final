import { TabTitle } from "./components/Utillity";
import Footer from "./components/footer/Footer";
import AboutUs from "./components/aboutUs/AboutUs";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import Blog from "./components/ResponsiveBlogTemplate/Blog"
import Career from "./components/Career/Career";
import Process from "./components/Process";
import PrivacyPolicy from "./components/PrivacyPolicy";
import RefundPolicy from "./components/RefundPolicy";
import TermsConditions from "./components/TermsConditions";
import LoginRegister from "./components/loginResgister/LoginRegister";
import EditProfile from "./components/editProfile/EditProfile";
import PendingWork from "./profilepages/PendingWork";
import CompletedWork from "./profilepages/CompletedWork";
import Quotation from "./profilepages/Quotation";
import Profile from "./profilepages/Profile";
import Documents from "./profilepages/Documents";
import DocumentsCompany from "./profilepages/DocumentsCompany";
import DocumentsTrust from "./profilepages/DocumentsTrust";
import HowWeWork from "./components/HowWeWork";
// ++++++++++++++++++++++++++++++++++ BLog paages +++++++++++++++++++++++++++++++++++++++++
import BlogFCRARegistration from "./components/ResponsiveBlogTemplate/BlogFCRARegistration";
import BlogCSRRegistration from "./components/ResponsiveBlogTemplate/BlogCSRResgistration";
// ++++++++++++++++++++++++++++++++++ services paages +++++++++++++++++++++++++++++++++++++++++
import Marketing from "./components/Marketing/Marketing";
import CommingSoon from "./components/pages/commingSoon";
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
import NGODarpan from "./components/pages/darpanRegistration/NGODarpan";
import SocietyReg from "./components/pages/societyRegistration/SocietyReg";
import PrivateCompany from "./components/pages/privateCompany/PrivateCompany";
import Trust from "./components/pages/trustRegistration/Trust";
import NidhiCompany from "./components/pages/NidhiCompony/NidhiCompany";
import Business_plan from "./components/pages/Business_plan/Business_plan";
import Ngo_Registration from "./components/pages/Ngo_12A_80G_Reg/Ngo_Registration";
import OnePersonCompany from "./components/pages/One_person_company/OnePersonCompany";
import Sole_Proprietorship from "./components/pages/Sole Proprietorship/Sole_Proprietorship";
import Apeda from "./components/pages/Apeda_Licese/Apeda";
import FCRA_Registration from "./components/pages/FCRA Registration/FCRA_Registration";
import Csr1 from "./components/pages/CSR_1_Reg/CSR_1";
import LLP from "./components/pages/llp/LLP";
import MSME from "./components/pages/MSME/MSME";
import Barcode from "./components/pages/barcode/Barcode";
import Tan from "./components/pages/tan/Tan";
import Rera from "./components/pages/rera/Rera";
import Pitch from "./components/pages/Pitch Deck/Pitch";
import Section8 from "./components/pages/Section_8/Section_8";
import FSSAI from "./components/pages/fssai/FSSAI";
import Fundraising from "./components/pages/fundraising/Fundraising";
import GEm from "./components/pages/gemRegistration/GEm";
import PAN from "./components/pages/pan/PAN";
import Startup from "./components/pages/startup/Startup";
import GST from "./components/pages/gst/GST";
import Shop from "./components/pages/shop/Shop";

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
          <Route path="/tushar" element={<HowWeWork />}></Route>
          <Route path="/commingSoon" element={<CommingSoon/>}></Route>
          <Route path="/FCRA-registration" element={<BlogFCRARegistration />}></Route>
          <Route path="/CSR-1-Registration" element={<BlogCSRRegistration />}></Route>
          <Route path="/login" element={<LoginRegister/>}></Route>
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/EditProfile" element={<EditProfile />} />
          <Route path="/pendingWork" element={<PendingWork />} />
          <Route path="/completedWork" element={<CompletedWork />} />
          <Route path="/quotation" element={<Quotation />} />
          <Route path="/documents" element={<Documents/>}/>
          <Route path="/documents/documentsCompany" element={<DocumentsCompany />} />
          <Route path="/documents/documentsTrust" element={<DocumentsTrust />} />
          <Route path="/aboutus" element={<AboutUs />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/career" element={<Career />}></Route>
          <Route path="/process" element={<Process />}></Route>
          <Route path="/partner" element={<Partner />}></Route>
          <Route path="/privacypolicy" element={<PrivacyPolicy />}></Route>
          <Route path="/refundpolicy" element={<RefundPolicy />}></Route>
          <Route path="/terms&conditions" element={<TermsConditions />}></Route>
          <Route path="/marketingSolutions" element={<Marketing />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
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
          <Route path="/ngo-darpan" element={ <NGODarpan />}> </Route>
          <Route path="/society-registration" element={ <SocietyReg /> }></Route>
          <Route path="/private-company" element={ <PrivateCompany /> }></Route>
          <Route path="/trust-registration" element={ <Trust /> }></Route>
          <Route path="/nidhi-company-registration" element={ <NidhiCompany /> }></Route>
          <Route path="/business-plan" element={ <Business_plan /> }></Route>
          <Route path="/ngo-registration" element={ <Ngo_Registration /> }></Route>
          <Route path="/one-person-company" element={ <OnePersonCompany /> }></Route>
          <Route path="/sole-proprietorship" element={ <Sole_Proprietorship /> }></Route>
          <Route path="/apeda-license" element={ <Apeda /> }></Route>
          <Route path="/fcraregistration" element={ <FCRA_Registration /> }></Route>
          <Route path="/csr1" element={<Csr1/>}></Route>
          <Route path="/llp" element={ <LLP /> }></Route>
          <Route path="/msme" element={ <MSME /> }></Route>
          <Route path="/barcode" element={ <Barcode /> }></Route>
          <Route path="/tan" element={<Tan/>}></Route>
          <Route path="/rera" element={<Rera/>}></Route>
          <Route path="/pitch" element={<Pitch/>}></Route>
          <Route path="/section-8" element={<Section8/>}></Route>
          <Route path="/fssai-registration" element={ <FSSAI/> }></Route>
          <Route path="/fundraising" element={ <Fundraising/> }></Route>
          <Route path="/gem-registration" element={ <GEm /> }></Route>
          <Route path="/pan-applicaton" element={ <PAN /> }></Route>
          <Route path="/startup" element={ <Startup /> }></Route>
          <Route path="/gst" element={ <GST /> }></Route>
          <Route path="/shop" element={ <Shop /> }></Route>
          <Route path="/business-plan" element={ <Business_plan /> }></Route>
          <Route path="/ngo-registration" element={ <Ngo_Registration /> }></Route>
          <Route path="/one-person-company" element={ <OnePersonCompany /> }></Route>
          <Route path="/sole-proprietorship" element={ <Sole_Proprietorship /> }></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;