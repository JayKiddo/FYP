import Layout from '../../../components/Layout'
import {useState} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {register,login} from '../../../actions/auth'
import {withRouter} from 'next/router'
import Router from 'next/router'
import {authenticate,isLoggedIn} from '../../../actions/handleCookie'

const AccountValidation = ({router}) => {

const [modal, setModal] = useState(false);

const toggle = () => setModal(!modal);

const logIn = member => {
         login(member).then(member => {
            if (member.error) {
                setValues({ ...values, error: member.error, loading: false });
                console.log(message.error)
            } else {
              authenticate(member, () => {
                if(isLoggedIn() && isLoggedIn().role ==='admin'){
                  Router.push(`/admin`)
                } else {
                  Router.push(`/member`)
                }
              })
            }
        });
}

const registerMember = () => {
  const accountValidationLink = router.query.token
  register({accountValidationLink}).then(data=>{
    if(data.error){ 
      alert(data.error)
    } else {
      const {email,password} = data
      let member = {email,password}
      logIn(member)
    }
  })
}

const showForm = () => {
	return (
	   <div>
      <Button color="primary" onClick={toggle}>Activate your account</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Welcome to Everly</ModalHeader>
        <ModalBody>
          Be ready to journaling your journey
        </ModalBody>
        <ModalFooter>
          <Button className="text-center" color="primary" onClick={registerMember}>Click here to to log in</Button>
        </ModalFooter>
      </Modal>
    </div>
	)
}

 return (
 	<Layout>
 		<div className="text-center">
	 		<h1 className="mt-2 mb-2">Ready to activate your account ?</h1>
	 		<hr/>
	 		{showForm()}
 		</div>
 	</Layout>
 )
}

export default withRouter(AccountValidation)

//onclick => register account