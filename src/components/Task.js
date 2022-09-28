import React from 'react'
function Task(props) {
  return<>
  
  <div className="col-lg-4">
         <div className="card mb-5 mb-lg-0">
           <div className="card-body">
             <h5 className="card-title text-muted text-uppercase text-center">{props.data.plan}</h5>
            
             <h6 className="card-price text-center">{props.data.cost}<span className="period">/month</span></h6>
             <hr/>
             <ul className="fa-ul">
               <li className={props.data.usersEnabler?"":"text-muted"}>
                <span className="fa-li">
                  <i className={props.data.usersEnabler?"fas fa-check":"fas fa-times"}>
                    </i>
                    </span>
                    <li className={props.data.highlight?"":"fw-bold"}>{props.data.users}</li>
                    </li>
               <li className={props.data.StorageEnabler?"":"text-muted"}><span className="fa-li"><i className={props.data.StorageEnabler?"fas fa-check":"fas fa-times"}><i className={props.data.common?"":"fa-bold"}></i></i></span>{props.data.Storage}</li>
               <li className={props.data.ProjectsEnabler?"":"text-muted"}><span className="fa-li"><i className={props.data.ProjectsEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.Projects}</li>
               <li className={props.data.AccessEnabler?"":"text-muted"}><span className="fa-li"><i className={props.data.AccessEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.Access}</li>
               <li className={props.data.PrivateProjectEnabler?"":"text-muted"}><span className="fa-li"><i className={props.data.PrivateProjectEnabler?"fas fa-times":"fas fa-check"}></i></span>{props.data.PrivateProject}</li>
               <li className={props.data.SupportEnabler?"":"text-muted"}><span className="fa-li"><i className={props.data.SupportEnabler?"fas fa-times":"fas fa-check"}></i></span>{props.data.Support}</li>
               <li className={props.data.SubdomainEnabler?"":"text-muted"}><span className="fa-li"><i className={props.data.SubdomainEnabler?"fas fa-times":"fas fa-check"}></i></span>{props.data.Subdomain}</li>
               <li className={props.data.StatusEnabler?"":"text-muted"}><span className="fa-li"><i className={props.data.SubdomainEnabler?"fas fa-times":"fas fa-check"}></i></span>{props.data.Status}</li>
             </ul>
             <div className="d-grid">
               <a href="javascript(void)" className="btn btn-primary text-uppercase">Button</a>
             </div>
           </div>
         </div>
       </div>

  </>
}

export default Task