import { Occupancy } from "./components/Occupancy";
import { Marketing } from "./components/Marketing";
import { ReputationManagement } from "./components/ReputationManagement";
import { FinancialManagement } from "./components/FinancialManagement";
import { Delinquency } from "./components/Delinquency";
import { Retention } from "./components/Retention";
import { LeaseFileAudit } from "./components/LeaseFileAudit";
import {Routes , Route} from 'react-router-dom';
import Testt from "./components/Testt";
import { ExampleTree } from "./components/OrganizationalChart";


function App() {
  return (

    <Routes>
       <Route path='/' element={<Testt/>} />
       <Route path='/Organization_Chart' element={<ExampleTree/>} />
      <Route path='/dash' element={<div className="container">
      <div className="py-8 md:py-[74px] gap-[18px] h-screen grid lg:grid-rows-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
        
        <Occupancy />  
        <Delinquency />
        <Retention />
        <FinancialManagement />
        <LeaseFileAudit />
        <ReputationManagement />
        <Marketing />
      </div>
    </div>} />
    




    </Routes>


  );
}

export default App;
