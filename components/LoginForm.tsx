type AcceptedProps = {
    email: string,
    password: string,
    handleChange : Function,
    handleSubmit : Function,
    disableButton : boolean
}

const LoginForm = ({email,password,handleChange,handleSubmit,disableButton}:AcceptedProps) =>{



    return (
        <form className="p-2" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" value={email} onChange={ e => handleChange(e)} className="form-control" id="email" aria-describedby="emailHelp"  />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" value={password} onChange={e => handleChange(e)} className="form-control" id="password" />
        </div>
        
        <button type="submit" disabled={disableButton} className="btn btn-primary">Submit</button>
      </form>

    )

}

export default LoginForm;