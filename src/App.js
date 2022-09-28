import './App.css';
import Task from './components/Task';
import React from 'react';
var data=[{
  common:'mute',
  plan:'FREE',
  cost:'$0',
  users:'Single User',
  highlight:'true',
  usersEnabler:true,
  Storage:'5GB Storage',
  StorageEnabler:true,
  Projects: 'Unlimited Public Projects',
  ProjectsEnabler:true,
  Access:'Community Access',
  AccessEnabler:true,
  PrivateProject: 'Unlimited Private Projects',
  PrivateProjectEnabler:false,
  Support :'Dedicated Phone Support',
  SupportEnabler:false,
  Subdomain:'Free Subdomain',
  SubdomainEnabler:false,
  Status: 'Monthly Status Reports',
  StatusEnabler:false
},
{
  common:'fa-bold',
  plan:'PLUS',
  cost:'$9',
  users:'5 Users',
  highlight:'false',
  usersEnabler:true,
  Storage:'50GB Storage',
  StorageEnabler:true,
  Projects: 'Unlimited Public Projects',
  ProjectsEnabler:true,
  Access:'Community Access',
  AccessEnabler:true,
  PrivateProject: 'Unlimited Private Projects',
  PrivateProjectEnabler:true,
  Support :'Dedicated Phone Support',
  SupportEnabler:true,
  Subdomain:'Free Subdomain',
  SubdomainEnabler:true,
  Status: 'Monthly Status Reports',
  StatusEnabler:false
},
{
  common:'false',
  plan:'PRO',
  cost:'$49',
  users:'Unlimited Users',
  highlight:'false',
  usersEnabler:true,
  Storage:'150GB Storage',
  StorageEnabler:true,
  Projects: 'Unlimited Public Projects',
  ProjectsEnabler:true,
  Access:'Community Access',
  AccessEnabler:true,
  PrivateProject: 'Unlimited Private Projects',
  PrivateProjectEnabler:true,
  Support :'Dedicated Phone Support',
  SupportEnabler:true,
  Subdomain:'Unlimited Free Subdomain',
  SubdomainEnabler:true,
  Status: 'Monthly Status Reports',
  StatusEnabler:true
}
]
function App() {
  return <>
     <section className="pricing py-5">
   <div className="container">
     <div className="row">
     <Task data={data[0]}/> 
     <Task data={data[1]}/> 
     <Task data={data[2]}/> 
  
     </div>
   </div>
 </section>
    </>

}

export default App;
